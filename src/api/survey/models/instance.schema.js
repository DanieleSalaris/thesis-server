const {Schema, SchemaTypes, model} = require('mongoose')

const InstanceSchema = new Schema({
  date: {
    type: SchemaTypes.String,
    required: true
  },

  surveyId: {
    type: SchemaTypes.String,
    required: true
  }
})

module.exports = model('instance', InstanceSchema)
