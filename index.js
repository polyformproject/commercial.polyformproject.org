/* This is the root JavaScript file for client-side scripts. */
const JSZip = require('jszip')
const commonmark = require('commonform-commonmark')
const docx = require('commonform-docx')
const docxOptions = require('./docx-options')
const fileSaver = require('file-saver')
const mustache = require('mustache')
const ooxmlSignaturePages = require('ooxml-signature-pages')

const documentTitles = require('./document-titles')
const order = require('./order.json')
const prompts = require('./prompts.json')
const signatures = require('./signatures.json')
const terms = require('./terms.json')

const version = require('./version.json')
const head = require('./head.json')

const permission = [
  { text: 'Each contributor licenses you to do everything with PolyForm licenses that would otherwise infringe that contributor’s copyright in it.' },
  { text: 'If you make changes to a PolyForm license, you must remove all mention of “PolyForm” and polyformproject.org, as well.' },
  { text: 'As far as the law allows, PolyForm licenses come as is, without any warranty at all, and no contributor will be liable to anyone for any damages related to the licenses or their use, for any kind of legal claim.', conspicuous: true }
]

const selections = {/* promptID -> null | choiceID */}
const promptIDs = [/* promptID */]
const fieldsets = {/* promptID => fieldset */}
const inputs = {/* promptID -> [input] */}
let submitButton

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header')

  // Version
  const versionLine = document.createElement('p')
  header.appendChild(versionLine)
  versionLine.className = 'version'
  versionLine.appendChild(document.createTextNode(version))

  const main = document.querySelector('main')
  const fragment = document.createDocumentFragment()

  // Main Form
  const form = document.createElement('form')
  fragment.appendChild(form)

  // Explanation Paragraph
  const explanation = document.createElement('p')
  explanation.appendChild(document.createTextNode(
    'Answer these questions to create a ZIP archive with an order form template and legal terms for a commercial software license agreement.'
  ))
  form.appendChild(explanation)

  // Advanced Options
  const haveAdvancedOptions = prompts.some(p => p.advanced)
  let advanced
  if (haveAdvancedOptions) {
    advanced = document.createElement('fieldset')
    advanced.className = 'collapsed'
    const legend = document.createElement('legend')
    advanced.appendChild(legend)
    legend.appendChild(document.createTextNode('Advanced Options'))

    const showText = 'Show Advanced Options'
    const hideText = 'Hide Advanced Options'
    const toggle = document.createElement('button')
    toggle.appendChild(document.createTextNode(showText))
    toggle.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()
      if (advanced.className === 'collapsed') {
        advanced.className = 'expanded'
        event.target.innerText = hideText
      } else {
        advanced.className = 'collapsed'
        event.target.innerText = showText
      }
    })
    advanced.appendChild(toggle)
  }

  // Prompts
  prompts.forEach(prompt => {
    const promptID = prompt.id
    promptIDs.push(promptID)
    inputs[promptID] = []
    const hasRequired = Array.isArray(prompt.requires)

    const set = document.createElement('fieldset')
    if (haveAdvancedOptions && prompt.advanced) advanced.appendChild(set)
    else form.appendChild(set)
    fieldsets[promptID] = set
    if (hasRequired) set.className = 'hidden'

    const legend = document.createElement('legend')
    set.appendChild(legend)
    legend.appendChild(document.createTextNode(prompt.name))

    const description = document.createElement('p')
    description.className = 'description'
    description.appendChild(document.createTextNode(prompt.description))
    set.appendChild(description)

    // Compute attributes common to all prompt inputs.
    const inputType = prompt.choice === 'single' ? 'radio' : 'checkbox'
    const required = prompt.choice === 'single' && hasRequired

    prompt.choices.forEach(choice => {
      // Skip choices scheduled for later versions.
      if (choice.version > 1) return

      const choiceID = choice.id

      const label = document.createElement('label')
      set.appendChild(label)

      const input = document.createElement('input')
      input.dataset.prompt = promptID
      input.dataset.choice = choiceID
      input.type = inputType
      input.id = `${promptID}_${choiceID}`
      input.name = promptID
      input.value = choiceID
      input.requred = required ? 'true' : null
      input.onchange = onInputChange
      input.checked = choice.default ? 'true' : null
      label.appendChild(input)
      label.appendChild(document.createTextNode(choice.name))
      inputs[promptID].push(input)

      if (Array.isArray(choice.notes)) {
        label.appendChild(document.createTextNode(' — '))
        label.appendChild(document.createTextNode(choice.notes.join(', ')))
      }
    })
  })

  if (haveAdvancedOptions) form.appendChild(advanced)

  // Form Submit Button
  submitButton = document.createElement('button')
  form.appendChild(submitButton)
  submitButton.id = 'submit'
  submitButton.type = 'submit'
  submitButton.appendChild(document.createTextNode('Download ZIP Archive'))
  form.onsubmit = event => {
    event.preventDefault()
    updateSelectionsGlobal()
    const view = {}
    Object.keys(selections).forEach(key => {
      const value = selections[key]
      view[`${key}=${value}`] = true
    })
    Promise.all([
      renderTemplate(order, view, documentTitles.order, signatures),
      renderTemplate(terms, view, documentTitles.terms)
    ])
      .then(files => {
        const zip = new JSZip()
        zip.file('order.docx', files[0])
        zip.file('terms.docx', files[1])
        const permissionLines = ['# Permission']
          .concat(permission.map(p => p.conspicuous ? `***${p.text}***` : p.text))
        zip.file('permission.txt', permissionLines.join('\n\n') + '\n')
        const manifest = {
          generator: 'commercial.polyformproject.org',
          version,
          head,
          date: new Date().toISOString(),
          selections
        }
        zip.file('manifest.json', JSON.stringify(manifest))
        zip.generateAsync({ type: 'blob' })
          .then(blob => {
            fileSaver.saveAs(blob, `${documentTitles.archive}.zip`, true)
          })
      })
  }
  // License for Legal Texts
  const license = document.createElement('section')
  license.innerHTML = `
    <h2 id=permission>Permission</h2>
    ${permission
      .map(p => `<p${p.conspicuous ? ' class=conspicuous' : ''}>${p.text}</p>`)
      .join('\n')
    }
  `
  fragment.appendChild(license)

  onInputChange()

  main.appendChild(fragment)
})

function renderTemplate (template, view, title, signatures) {
  const markdown = mustache.render(template, view)
  const parsed = commonmark.parse(markdown)
  const options = { title, edition: version }
  Object.assign(options, docxOptions)
  if (signatures) options.after = ooxmlSignaturePages(signatures)
  return docx(parsed.form, [], options).generateAsync({ type: 'blob' })
}

function onInputChange () {
  updateSelectionsGlobal()
  applyPromptRequirements()
}

function updateSelectionsGlobal () {
  promptIDs.forEach(promptID => {
    selections[promptID] = null
    const elements = inputs[promptID]
    elements.forEach(element => {
      if (element.checked && !element.disabled) {
        const choiceID = element.dataset.choice
        if (element.type === 'checkbox') {
          if (Array.isArray(selections[promptID])) {
            selections[promptID].push(choiceID)
          } else {
            selections[promptID] = [choiceID]
          }
        } else if (element.type === 'radio') {
          selections[promptID] = choiceID
        }
      }
    })
  })
}

function applyPromptRequirements () {
  const requiredPromptIDs = []
  prompts.forEach(prompt => {
    const promptID = prompt.id
    const required = prompt.requires
    if (!Array.isArray(required)) {
      requiredPromptIDs.push(promptID)
      return
    }
    const met = required.some(predicate => {
      const requiredPromptID = Object.keys(predicate)[0]
      const requiredChoiceID = Object.values(predicate)[0]
      return selections[requiredPromptID] === requiredChoiceID
    })
    if (met) {
      requiredPromptIDs.push(promptID)
      fieldsets[promptID].className = ''
      inputs[promptID].forEach(input => {
        input.disabled = ''
      })
    } else {
      fieldsets[promptID].className = 'hidden'
      inputs[promptID].forEach(input => {
        input.disabled = 'true'
        input.checked = ''
      })
    }
  })
  const complete = requiredPromptIDs.every(promptID => selections[promptID])
  submitButton.disabled = !complete
}
