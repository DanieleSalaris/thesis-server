if (process.env.DEV) {
  require('dotenv').config() // take environment variables from .env file
}

const express = require('express')
const bodyParser = require('body-parser')
const {httpStatusCode} = require('./helpers/constants')
const {connectDb} = require('./db')
const authRouter = require('./api/auth/routers/auth.router')
const surveyRouter = require('./api/survey/routers/suvery.router')
const instanceRouter = require('./api/survey/routers/instance.router')
const userService = require('./api/auth/services/user.service')

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 4242
const jsonParser = bodyParser.json()
const adminName = process.env.ADMIN_NAME || 'root'
const adminPassword = process.env.ADMIN_PASSWORD || '12345678'

connectDb()
  .then(() => {
    userService.upsertFirstAdmin(adminName, adminPassword).catch()
  })
  .catch(err => {
    console.error(err)
    process.exit(-1)
  })

app.use('/', express.static('./client-dist'))
app.use('/api', jsonParser)
app.use('/api/auth', authRouter,)
app.use('/api/survey', surveyRouter)
app.use('/api/instance', instanceRouter)

app.use ((err, req, res, next) => {
  if (err) {
    console.log(`${err.name}: ${err.message}`)
    console.log(err)
    let statusCode = httpStatusCode.serverError.INTERNAL_SERVER_ERROR
    if(err.name === 'ValidationError') {
      statusCode = httpStatusCode.clientError.UNPROCESSABLE_ENTITY
    }
    res
      .status(statusCode)
      .json({message: err.message})
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`)
})
