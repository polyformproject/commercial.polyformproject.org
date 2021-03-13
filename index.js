const JSZip = require('jszip')
const commonmark = require('commonform-commonmark')
const docx = require('commonform-docx')
const fileSaver = require('file-saver')
const mustache = require('mustache')
const outline = require('outline-numbering')

const prompts = require('./prompts.json')
const terms = require('./terms.js')
const order = require('./order.js')

const selections = {/* promptID -> null | choiceID */}
const promptIDs = [/* promptID */]
const fieldsets = {/* promptID => fieldset */}
const inputs = {/* promptID -> [input] */}
const requirements = {/* promptID -> [required] */}
let submit

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')

  const form = document.createElement('form')
  main.appendChild(form)

  prompts.forEach(prompt => {
    const promptID = prompt.id
    promptIDs.push(promptID)
    inputs[promptID] = []
    const hasRequired = Array.isArray(prompt.requires)
    if (hasRequired) requirements[promptID] = prompt.requires

    const set = document.createElement('fieldset')
    form.appendChild(set)
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
      input.name = promptID
      input.value = choiceID
      input.requred = required ? 'true' : null
      input.onchange = onInputChange
      label.appendChild(input)
      label.appendChild(document.createTextNode(choice.name))
      inputs[promptID].push(input)

      if (Array.isArray(choice.notes)) {
        label.appendChild(document.createTextNode(' — '))
        label.appendChild(document.createTextNode(choice.notes.join(', ')))
      }
    })
  })

  submit = document.createElement('button')
  form.appendChild(submit)
  submit.type = 'submit'
  submit.appendChild(document.createTextNode('Generate'))
  form.onsubmit = event => {
    event.preventDefault()
    updateSelectionsGlobal()
    const view = {}
    Object.keys(selections).forEach(key => {
      const value = selections[key]
      view[`${key}=${value}`] = true
    })
    Promise.all([
      renderTemplate(order, view, 'PolyForm Software License Order'),
      renderTemplate(terms, view, 'PolyForm Software License Terms')
    ])
      .then(files => {
        const zip = new JSZip()
        zip.file('order.docx', files[0])
        zip.file('terms.docx', files[1])
        zip.generateAsync({ type: 'blob' })
          .then(blob => {
            fileSaver.saveAs(blob, 'PolyForm Software License Packet.zip', true)
          })
      })
  }

  const reset = document.createElement('button')
  form.appendChild(reset)
  reset.type = 'reset'
  reset.appendChild(document.createTextNode('Reset'))

  applyPromptRequirements()
})

function renderTemplate (template, view, title) {
  const markdown = mustache.render(template, view)
  const parsed = commonmark.parse(markdown)
  const options = {
    title,
    numbering: outline
  }
  return docx(parsed.form, [], options).generateAsync({ type: 'blob' })
}

function onInputChange (event) {
  updateSelectionsGlobal()
  applyPromptRequirements()
}

function updateSelectionsGlobal () {
  promptIDs.forEach(promptID => {
    selections[promptID] = null
    const elements = inputs[promptID]
    elements.forEach(element => {
      if (element.checked) {
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
  Object.keys(requirements).forEach(promptID => {
    const required = requirements[promptID]
    const met = required.some(predicate => {
      const requiredPromptID = Object.keys(predicate)[0]
      const requiredChoiceID = Object.values(predicate)[0]
      return selections[requiredPromptID] === requiredChoiceID
    })
    if (met) {
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
}
