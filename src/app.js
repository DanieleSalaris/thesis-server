require('dotenv').config() // take environment variables from .env file

const express = require('express')
const bodyParser = require('body-parser')
const authRouter = require('./api/auth/routers/auth.router')
const mongoose = require('mongoose')
const {httpStatusCode} = require('./helpers/constants')

const app = express()
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 4242
const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost'
const DB_NAME = process.env.DB_NAME || 'tesi_db'
const DB_USER = process.env.DATABASE_USER || 'root'
const DB_PASSWORD = process.env.DATABASE_PASSWORD || 'password'
const jsonParser = bodyParser.json()

async function connectDb(dbName=DB_NAME, dbUrl=DB_URL, user=DB_USER, password=DB_PASSWORD) {
  await mongoose.connect(`${dbUrl}/${dbName}`, {
    auth: {
      authSource: 'admin',
      user: user,
      password: password
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log('connected to db')
  // const db = mongoose.connection
  // db.on('error', error => console.error(error));
  // db.once('open', function() {
  //   console.log('Connected to db')
  // });
  //
  // return db
}


connectDb()
  .catch(err => {
    console.error(err)
    process.exit(-1)
  })

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/api/auth', jsonParser, authRouter,)

app.use ((err, req, res, next) => {
  if (err) {
    console.log(`${err.name}: ${err.message}`)
    res
      .status(httpStatusCode.serverError.INTERNAL_SERVER_ERROR)
      .send()
  }
})
