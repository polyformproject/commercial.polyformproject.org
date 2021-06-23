const AJV = require('ajv').default
const JSZip = require('jszip')
const commonmark = require('commonform-commonmark')
const docx = require('commonform-docx')
const docxOptions = require('./docx-options')
const fs = require('fs')
const handler = require('./server')
const http = require('http')
const listVars = require('mustache-vars')
const mustache = require('mustache')
const ooxmlSignaturePages = require('ooxml-signature-pages')
const order = require('fs').readFileSync('./order.md', 'utf8')
const path = require('path')
const playwright = require('playwright')
const tape = require('tape')

const examples = require('./examples.json')
const prompts = require('./prompts.json')
const schema = require('./prompts.schema.json')
const signatures = require('./signatures.json')
const terms = require('fs').readFileSync('./terms.md', 'utf8')

tape('prompts conform to schema', test => {
  const ajv = new AJV({ allErrors: true })
  const validate = ajv.compile(schema)
  validate(prompts)
  test.same(validate.errors, null)
  test.end()
})

tape('templating', test => {
  function vars (input) {
    return listVars(input).map(e => e.split('\t').reverse()[0])
  }
  const usedInTerms = vars(terms)
  const usedInOrder = vars(order)
  const possible = []

  prompts.forEach(prompt => {
    const promptID = prompt.id
    prompt.choices.forEach(choice => {
      if (choice.version > 1) return
      const choiceID = choice.id
      possible.push(`${promptID}=${choiceID}`)
    })
  })

  /*
  possible.forEach(expected => {
    if (!usedInTerms.includes(expected)) {
      test.fail(`In Prompts, Not in Terms: ${expected}`)
    }
  })
  */

  usedInTerms.forEach(expected => {
    if (!possible.includes(expected)) {
      test.fail(`In Terms, Not in Prompts: ${expected}`)
    }
  })

  usedInOrder.forEach(expected => {
    if (!possible.includes(expected)) {
      test.fail(`In Order, Not in Prompts: ${expected}`)
    }
  })

  test.end()
})

tape('prompt requirements', test => {
  for (const prompt of prompts) {
    if (!prompt.requires) continue
    const promptID = prompt.id
    for (const requirement of prompt.requires) {
      for (const otherPromptID in requirement) {
        const otherPrompt = prompts.find(prompt => prompt.id === otherPromptID)
        test.assert(otherPrompt, `${promptID}: required prompt "${otherPromptID}" exists`)
        const choiceID = requirement[otherPromptID]
        const choice = otherPrompt.choices.find(choice => choice.id === choiceID)
        test.assert(choice, `${promptID}: required prompt "${otherPromptID}" has choice "${choiceID}"`)
      }
    }
  }
  test.end()
})

for (const name in examples) {
  tape(`validate example "${name}"`, test => {
    const example = examples[name]
    for (const promptID in example) {
      const choiceID = example[promptID]
      const prompt = prompts.find(prompt => prompt.id === promptID)
      test.assert(prompt, `promptID "${promptID}"`)
      if (!prompt) break
      const choice = prompt.choices.find(choice => choice.id === choiceID)
      test.assert(choice, `choiceID "${choiceID}"`)
    }
    test.end()
  })
}

tape('terms renders', testRenders('terms', terms))
tape('order renders', testRenders('order', order))

function testRenders (kind, template) {
  return test => {
    for (const name in examples) {
      test.test(`render example "${name}"`, test => {
        const example = examples[name]
        const view = {}
        for (const promptID in example) {
          const choiceID = example[promptID]
          view[`${promptID}=${choiceID}`] = true
        }
        let rendered
        test.doesNotThrow(() => {
          rendered = mustache.render(template, view)
        }, `Mustache render ${name}`)
        let parsed
        test.doesNotThrow(() => {
          parsed = commonmark.parse(rendered)
        }, 'Common Form render')
        test.doesNotThrow(() => {
          const options = {
            title: `PolyForm Commercial Test Rendering: ${name} ${kind}`,
            edition: `Generated ${new Date().toISOString()}`,
            after: ooxmlSignaturePages(kind === 'order' ? signatures : [])
          }
          Object.assign(options, docxOptions)
          docx(parsed.form, [], options)
            .generateAsync({ type: 'nodebuffer' })
            .then(result => {
              fs.mkdir('examples', { recursive: true }, error => {
                test.ifError(error, 'created examples directory')
                fs.writeFile(path.join('examples', `${name}-${kind}.docx`), result, error => {
                  test.ifError(error)
                  test.end()
                })
              })
            })
        })
      })
    }
  }
}

for (const key in examples) {
  tape(`integration: ${key}`, test => {
    const server = http.createServer(handler)
    server.listen(0 /* random high port */, async () => {
      const port = server.address().port
      test.assert(port, 'port')
      let browser
      try {
        // Launch a browser.
        browser = await playwright.chromium.launch({
          headless: !process.env.HEADFUL
        })
        const context = await browser.newContext({
          acceptDownloads: true
        })
        const page = await context.newPage()
        await page.goto(`http://localhost:${port}`)

        // Check <h1>.
        const h1 = await page.$('h1')
        const heading = await h1.textContent()
        test.equal(heading, 'Commercial License Generator', 'heading')

        // Fill out the form.
        const showAdvanced = await page.$('text=Show Advanced Options')
        if (showAdvanced) await showAdvanced.click()
        const example = examples[key]
        for (const promptID in example) {
          const choiceID = example[promptID]
          await page.check(`#${promptID}_${choiceID}`)
        }

        // Download the packet.
        const [download] = await Promise.all([
          page.waitForEvent('download'),
          page.click('#submit')
        ])
        test.pass('selected all options')
        const path = await download.path()
        test.assert(path, 'downloaded')

        // Inspect the archive.
        const data = fs.readFileSync(path)
        const zip = new JSZip()
        await zip.loadAsync(data)
        const entries = Object.keys(zip.files)
        test.assert(entries.includes('order.docx'), 'zip contains order.docx')
        test.assert(entries.includes('terms.docx'), 'zip contains terms.docx')
      } catch (error) {
        test.ifError(error)
      } finally {
        if (browser) browser.close()
        server.close()
        test.end()
      }
    })
  })
}
