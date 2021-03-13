const AJV = require('ajv').default
const listVars = require('mustache-vars')
const tape = require('tape')
const terms = require('fs').readFileSync('./terms.md', 'utf8')
const order = require('fs').readFileSync('./order.md', 'utf8')

const schema = require('./prompts.schema.json')
const data = require('./prompts.json')

tape('prompts conform to schema', test => {
  const ajv = new AJV({ allErrors: true })
  const validate = ajv.compile(schema)
  validate(data)
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
      test.fail(`In Prompts, Not in Terms: ${expected}`)
    }
  })

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
