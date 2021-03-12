const AJV = require('ajv').default

const ajv = new AJV({ allErrors: true })
const schema = require('./prompts.schema.json')
const validate = ajv.compile(schema)
const data = require('./prompts.js')

const valid = validate(data)
if (!valid) console.error(validate.errors)
process.exit(valid ? 0 : 1)
