const express = require('express')
const app = express()
const cors = require('cors')

const loginRouter = require('./controllers/login')
const signupRouter = require('./controllers/signup')
//middleware to be added in future
// const middleware = require('./utils/middleware') 

app.use(cors())
app.use(express.json())

app.use('/login', loginRouter) //params are the url and the controller
app.use('/signup', signupRouter)

//add middleware and error handlers from middleware here

module.exports = app