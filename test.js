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
const template = require('fs').readFileSync('./template.md', 'utf8')
const used = listVars(template)

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
  if (!used.includes(expected)) {
    console.error(`In Prompts, Not in Template: ${expected}`)
    ok = false
  }
})

used.forEach(expected => {
  if (!possible.includes(expected)) {
    console.error(`In Template, Not in Prompts: ${expected}`)
    ok = false
  }
})

process.exit(ok ? 0 : 1)
