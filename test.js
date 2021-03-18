const AJV = require('ajv').default
const commonmark = require('commonform-commonmark')
const docx = require('commonform-docx')
const listVars = require('mustache-vars')
const mustache = require('mustache')
const order = require('fs').readFileSync('./order.md', 'utf8')
const outline = require('outline-numbering')
const tape = require('tape')
const terms = require('fs').readFileSync('./terms.md', 'utf8')

const schema = require('./prompts.schema.json')
const prompts = require('./prompts.json')

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

const examples = {
  trial: {
    model: 'trial',
    delivery: 'compiled',
    modification: 'no',
    escrow: 'no',
    maintenance: 'version',
    support: 'none',
    patent: 'none',
    law: 'vendor',
    venue: 'vendor',
    disputes: 'court'
  },
  heavy: {
    model: 'seats',
    expansion: 'list',
    reporting: 'audit',
    term: 'renewing',
    delivery: 'both',
    modification: 'yes',
    escrow: 'yes',
    maintenance: 'term',
    support: 'full',
    warranty: 'term',
    patent: 'all',
    law: 'california',
    venue: 'vendor',
    disputes: 'aaa'
  }
}

tape('valid examples', test => {
  for (const name in examples) {
    test.test(`validate example "${name}"`, test => {
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
  test.end()
})

tape('terms renders', testRenders(terms))
tape('order renders', testRenders(order))

function testRenders (template) {
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
          docx(parsed.form, [], { numbering: outline })
            .generateAsync({ type: 'nodebuffer' })
        }, '.docx render')
        test.end()
      })
    }
    test.end()
  }
}
