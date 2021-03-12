import prompts from './prompts.js'

const promptIDs = []
const inputs = {}
const requirements = {}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')
  const form = document.createElement('form')
  main.appendChild(form)
  prompts.forEach(prompt => {
    const promptID = prompt.id
    promptIDs.push(promptID)
    inputs[promptID] = {}
    const hasRequired = Array.isArray(prompt.requires)
    if (hasRequired) requirements[promptID] = prompt.requires
    const set = document.createElement('fieldset')
    form.appendChild(set)
    if (hasRequired) set.className = 'hidden'
    const legend = document.createElement('legend')
    set.appendChild(legend)
    legend.appendChild(document.createTextNode(prompt.name))
    const description = document.createElement('p')
    description.className = 'description'
    description.appendChild(document.createTextNode(prompt.description))
    set.appendChild(description)
    const inputType = prompt.choice === 'single' ? 'radio' : 'checkbox'
    const required = prompt.choice === 'single' && hasRequired
    const disabled = hasRequired
    prompt.choices.forEach(choice => {
      if (choice.version > 1) return
      const choiceID = choice.id
      const label = document.createElement('label')
      set.appendChild(label)
      const input = document.createElement('input')
      input.dataset.promptID = promptID
      input.dataset.choiceID = choiceID
      input.type = inputType
      input.name = promptID
      input.value = choiceID
      input.requred = required ? 'true' : null
      input.disabled = choice.forced || disabled ? 'true' : null
      input.onchange = onChange
      if (choice.forced) input.checked = 'true'
      label.appendChild(input)
      label.appendChild(document.createTextNode(choice.name))
      inputs[promptID][choiceID] = input
      // Notes
      if (Array.isArray(choice.notes)) {
        label.appendChild(document.createTextNode(' — '))
        label.appendChild(document.createTextNode(choice.notes.join(', ')))
      }
    })
  })
  const submit = document.createElement('button')
  form.appendChild(submit)
  submit.type = 'submit'
  submit.appendChild(document.createTextNode('Generate'))
  form.onsubmit = event => {
    event.preventDefault()
    window.alert('TODO')
  }
  const reset = document.createElement('button')
  form.appendChild(reset)
  reset.type = 'reset'
  reset.appendChild(document.createTextNode('Reset'))
})

function onChange (event) {
  const target = event.target
  const promptID = target.dataset.promptID
  const choiceID = target.dataset.choiceID
  console.log({ event, promptID, choiceID })
  // TODO: enable, disable, and reset prompts with requirements
}
