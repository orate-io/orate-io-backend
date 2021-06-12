
// logs all requests sent to the server with their path and content
const reqLog = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}

module.exports = {
  reqLog
}