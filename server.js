const http = require('http')
const send = require('send')
const path = require('path')
const fs = require('fs')

const deployed = fs.readFileSync('./deployed', 'utf8').trim().split('\n')

const handler = (request, response) => {
  const url = request.url
  const basename = url === '/' ? 'index.html' : path.basename(url)
  if (deployed.includes(basename)) {
    return send(request, basename).pipe(response)
  }
  response.statusCode = 404
  response.end()
}

if (module.parent) {
  module.exports = handler
} else {
  const server = http.createServer(handler)
  process
    .on('SIGTERM', shutdown)
    .on('SIGQUIT', shutdown)
    .on('SIGINT', shutdown)
    .on('uncaughtException', error => {
      console.error(error)
      shutdown(1)
    })
  function shutdown (exitCode = 0) {
    server.close(() => process.exit(exitCode))
  }
  server.listen(process.env.PORT || 8080, () => {
    const port = server.address().port
    console.log(`Listening on port ${port}.`)
  })
}
