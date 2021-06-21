<<<<<<< HEAD
/**
 * @file The index.js file is the root of the program runtime and
 * deals with server and environment variables.
 */
=======
const app = require('./app')
>>>>>>> 148fa1f (Server Base Refactor)
const http = require('http')
const config = require('./utils/config')


const server = http.createServer(app)


app.get('/', (request, response) => {
  console.log('went through')
  response.json("hello world")
})

<<<<<<< HEAD
const PORT = 3001
app.listen(PORT)
console.log(`server running on port: ${PORT}`)
=======
server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
>>>>>>> 148fa1f (Server Base Refactor)
