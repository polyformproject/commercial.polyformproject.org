const yaml = require('js-yaml')
const fs = require('fs')
const AJV = require('ajv').default

const ajv = new AJV({ allErrors: true })
const schema = require('./choices.schema.json')
const validate = ajv.compile(schema)

try {
  const data = yaml.load(fs.readFileSync('./choices.yml'))
  const valid = validate(data)
  if (!valid) console.log(validate.errors)
} catch (error) {
  console.error(error)
  process.exit(1)
}
