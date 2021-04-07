const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  _id: {
    type: 'string',
    required: true
  },

  password: {
    type: 'string',
    required: true
  },

  passwordHash: {
    type: 'string',
    required: true
  },

  role: {
    type: 'string',
    required: true,
  }
})

module.exports = mongoose.model('user', userSchema)
