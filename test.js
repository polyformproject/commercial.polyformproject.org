const AJV = require('ajv').default

const ajv = new AJV({ allErrors: true })
const schema = require('./choices.schema.json')
const validate = ajv.compile(schema)
const data = require('./choices.js')

const valid = validate(data)
if (!valid) console.error(validate.errors)
process.exit(valid ? 0 : 1)
