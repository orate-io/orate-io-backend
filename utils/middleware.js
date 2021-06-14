const reqLog = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}

const unkownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unkown endpoint' })
}

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
