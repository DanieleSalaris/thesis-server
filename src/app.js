require('dotenv').config() // take environment variables from .env file

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {httpStatusCode} = require('./helpers/constants')
const {connectDb} = require('./db')
const authRouter = require('./api/auth/routers/auth.router')
const surveyRouter = require('./api/survey/routers/suvery.router')
const instanceRouter = require('./api/survey/routers/instance.router')

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 4242
const jsonParser = bodyParser.json()



connectDb()
  .catch(err => {
    console.error(err)
    process.exit(-1)
  })

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api', jsonParser)
app.use('/api/auth', authRouter,)
app.use('/api/survey', surveyRouter)
app.use('/api/instance', instanceRouter)

app.use ((err, req, res, next) => {
  if (err) {
    console.log(`${err.name}: ${err.message}`)
    res
      .status(httpStatusCode.serverError.INTERNAL_SERVER_ERROR)
      .send()
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://${host}:${port}`)
})
