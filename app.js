/**
 * @file Where the program is run, contains the middleware, routes, and connects to the database.
 */
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

/* calling controller variables */
const loginRouter = require('./controllers/login')
const signupRouter = require('./controllers/signup')
const videoRouter = require('./controllers/video')
const middleware = require('./utils/middleware')

/* setting the uri based on if the file has access to the env */
console.log(config.MONGODB_URL)
const uri = config.MONGODB_URL
  ? config.MONGODB_URL
  : null

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('connected to mongoDB')
  })

/*
 * Request processing
 */
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.reqLog)
app.use(middleware.tokenGet)
app.use(middleware.userGet)

/*
 * Routers
 */
app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use('/video', videoRouter)
/*
 * Error Handling
 */
app.use(middleware.unkownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
