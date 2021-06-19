// const jwt = require('jsonwebtoken')

/**
 * log of information the user sends to the server.
 * @log
 * @param {string} method - method type of request.
 * @param {string} path - url the rerquest is sent to.
 * @param {string} body - content of the request.
 */
const reqLog = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}
/**
 * json error message rerouter.
 * @param {string} response - returns error message if url entered is unknown.
 */
const unkownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}
/**
 * error handler middleware.
 * @param {string} response - returns error message error is returned.
 */
const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'error') {
    return response.status(400).send({ error: 'error name' })
  }

  next(error)
}

module.exports = {
  reqLog,
  unkownEndpoint,
  errorHandler
}
