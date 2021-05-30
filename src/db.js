const mongoose = require('mongoose')

const DB_URL = process.env.DATABASE_URL || 'mongodb://localhost'
const DB_NAME = process.env.DB_NAME || 'tesi_db'
const DB_USER = process.env.DATABASE_USER || 'root'
const DB_PASSWORD = process.env.DATABASE_PASSWORD || 'password'

async function connectDb(dbName=DB_NAME, dbUrl=DB_URL, user=DB_USER, password=DB_PASSWORD) {
  return mongoose.connect(`${dbUrl}/${dbName}`, {
    auth: {
      authSource: 'admin',
      user: user,
      password: password
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

module.exports = {connectDb}
