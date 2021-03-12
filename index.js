import choices from './choices.js'

const inputs = {}

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main')
  const form = document.createElement('form')
  main.appendChild(form)
  choices.forEach(prompt => {
    const promptID = prompt.id
    inputs[promptID] = {}
    const set = document.createElement('fieldset')
    form.appendChild(set)
    const legend = document.createElement('legend')
    set.appendChild(legend)
    legend.appendChild(document.createTextNode(prompt.name))
    const description = document.createElement('p')
    description.className = 'description'
    description.appendChild(document.createTextNode(prompt.description))
    set.appendChild(description)
    const inputType = prompt.choice === 'single' ? 'radio' : 'checkbox'
    const required = (
      prompt.choice === 'single' &&
      !Array.isArray(prompt.requires)
    )
    const disabled = Array.isArray(prompt.requires)
    prompt.choices.forEach(choice => {
      if (choice.version > 1) return
      const choiceID = choice.id
      const label = document.createElement('label')
      set.appendChild(label)
      const input = document.createElement('input')
      input.type = inputType
      input.name = promptID
      input.value = choiceID
      input.requred = required ? 'true' : null
      input.disabled = choice.forced || disabled ? 'true' : null
      if (choice.forced) input.checked = 'true'
      label.appendChild(input)
      label.appendChild(document.createTextNode(choice.name))
      inputs[promptID][choiceID] = input
      // Notes
      if (Array.isArray(choice.notes)) {
        const ul = document.createElement('ul')
        set.appendChild(ul)
        choice.notes.forEach(note => {
          const li = document.createElement('li')
          li.className = 'note'
          ul.appendChild(li)
          li.appendChild(document.createTextNode(note))
        })
      }
    })
  })
  const submit = document.createElement('button')
  submit.type = 'submit'
  submit.appendChild(document.createTextNode('Generate'))
  form.appendChild(submit)
  form.onsubmit = event => {
    event.preventDefault()
    window.alert('TODO')
  }
})
