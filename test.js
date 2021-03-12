const AJV = require('ajv').default

let ok = true

const ajv = new AJV({ allErrors: true })
const schema = require('./prompts.schema.json')
const validate = ajv.compile(schema)
const data = require('./prompts.json')

const valid = validate(data)
if (!valid) {
  console.error(validate.errors)
  ok = false
}

const listVars = require('mustache-vars')

const terms = require('fs').readFileSync('./terms.md', 'utf8')
const usedInTerms = listVars(terms)

const order = require('fs').readFileSync('./order.md', 'utf8')
const usedInOrder = listVars(order)

const possible = []
data.forEach(prompt => {
  const promptID = prompt.id
  prompt.choices.forEach(choice => {
    if (choice.version > 1) return
    const choiceID = choice.id
    possible.push(`${promptID}=${choiceID}`)
  })
})
possible.forEach(expected => {
  if (!usedInTerms.includes(expected)) {
    console.error(`In Prompts, Not in Terms: ${expected}`)
    ok = false
  }
})

usedInTerms.forEach(expected => {
  if (!possible.includes(expected)) {
    console.error(`In Terms, Not in Prompts: ${expected}`)
    ok = false
  }
})

usedInOrder.forEach(expected => {
  if (!possible.includes(expected)) {
    console.error(`In Order, Not in Prompts: ${expected}`)
    ok = false
  }
})

process.exit(ok ? 0 : 1)
