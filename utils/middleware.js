/**
 * @file Contains the middleware, includes errore handling and request logs.
 * @author Yacine Saoudi
 */
// const jwt = require('jsonwebtoken')

/**
 *.
 * Log of information the user sends to the server.
 *
 * @log
 * @param {string} method - Method type of request.
 * @param {string} Path - Url the rerquest is sent to.
 * @param {string} body - Content of the request.
 * @param request - Receives the method path and body.
 * @param response
 * @param next
 * @param {string} body - Content of the request.
 */
const reqLog = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}
/**
 *.
 * Json error message rerouter.
 *
 * @param request
 * @param {string} response - Returns error message if url entered is unknown.
 */
const unkownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}
/**
 *.
 * Error handler middleware.
 *
 * @param error - The error type received.
 * @param request
 * @param {string} response - Returns error message error is returned.
 * @param next
 * @error error - Default error message, returns 400 status code
 * @returns
 */
const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if (error.name === 'error') {
    return response.status(400).send({ error: 'error name' })
  }
  else if (error.name == 'validationError'){
    return response.status(401).send({ error: 'invalid username or password' })
  }

  next(error)
}

module.exports = {
  reqLog,
  unkownEndpoint,
  errorHandler
}

