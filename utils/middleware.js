/**
 * @file Contains the middleware, includes errore handling and request logs.
 */
const jwt = require('jsonwebtoken')

/**
 * Log of information the user sends to the server.
 *
 * @param {object} request Receives the method path and body.
 * @param {object} response Empty response to be returned.
 * @param {string} request.method Method type of request.
 * @param {string} request.path Url the rerquest is sent to.
 * @param {string} request.body Content of the request.
 * @param {Function} next Next middleware fuunction to be called.
 */
const reqLog = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}

/**
 * Token receiver that takes the request, finds the auth header, and recieves the token while isolating the bearer token.
 *
 * @param {object} request Receives the token.
 * @param {object} response Returns the token as request.token.
 * @param {Function} next Next middleware fuunction to be called.
 */
const tokenGet = (request, response, next) => {
  const auth = request.get('Authorization')
<<<<<<< HEAD
<<<<<<< HEAD
  if (auth) {
    request.token = auth.substring(7)
  }
  next()
}

=======
  if (auth){
=======
  if (auth) {
>>>>>>> 3ed87b4 (main rebase fix)
    request.token = auth.substring(7)
  }
  next()
}
<<<<<<< HEAD
>>>>>>> b178781 (Backend Video Page)
=======

>>>>>>> 3ed87b4 (main rebase fix)
/**
 * Token decoder that takes the token, verifies it, then decodes it and saves it as a user object and returns that.
 *
 * @param {object} request Receives the token minus the bearer substring.
 * @param {object} response Returns request.user object that contains the user's username and id.
 * @param {Function} next Next middleware fuunction to be called.
 */
const userGet = (request, response, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  if (request.token) {
=======
  if (request.token){
>>>>>>> b178781 (Backend Video Page)
=======
  if (request.token) {
>>>>>>> 3ed87b4 (main rebase fix)
    const tokenDecode = jwt.verify(request.token, process.env.SECRET)
    request.username = tokenDecode.username
    request.id = tokenDecode.id
    request.user = {
      username: request.username,
      id: request.id
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log(request.user)
>>>>>>> b178781 (Backend Video Page)
=======
>>>>>>> 9e33861 (controller and middleware fixes)
  next()
}

/**
 * Json error message rerouter for cases where the url from the request doesnt exist.
 *
 * @param {object} request Receives the error.
 * @param {object} response Returns error message if url entered is unknown.
 * @param {Function} next Next middleware fuunction to be called.
 */
const unkownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}

/**
 * Error handler middleware.
 *
 * @param {object} request The error.
 * @param {object} response Returns error message error is returned.
 * @param {Function} next Next middleware fuunction to be called.
 * @param {object} error The error type received.
 * @returns {error} Returns status code representing error.
 */
const errorHandler = (error, request, response, next) => {
  if (error.name === 'error') {
    return response.status(400).send({ error: 'error name' })
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  else if (error.name == 'ValidationError') {
    return response.status(401).send({ error: 'invalid username or password' })
=======
=======
>>>>>>> 9e33861 (controller and middleware fixes)
  else if (error.name == 'ValidationError'){
    return response.status(400).send({ error: 'invalid username or password' })
  }
  else if (error.name === 'JsonWebTokenError'){
    return response.status(401).json({
      error: 'invalid token'
    })
<<<<<<< HEAD
>>>>>>> 2713fae (controller and middleware fixes)
=======
>>>>>>> 9e33861 (controller and middleware fixes)
  }
=======
  else if (error.name == 'ValidationError') {
    return response.status(401).send({ error: 'invalid username or password' })
  }
>>>>>>> 3ed87b4 (main rebase fix)
  next(error)
}

module.exports = {
  reqLog,
  tokenGet,
  userGet,
  unkownEndpoint,
  errorHandler
}
