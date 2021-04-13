const {Schema, SchemaTypes, model} = require('mongoose')

const AnswerSchema = new Schema({
  // _id: {
  //   type: SchemaTypes.ObjectId,
  //   required: true
  // },

  // instanceId: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   required: true,
  // },

  surveyId: {
    // type: SchemaTypes.ObjectId,
    type: SchemaTypes.String,
    required: true,
  },

  questionId: {
    // type: SchemaTypes.ObjectId,
    type: SchemaTypes.String,
    required: true,
  },

  questionType: {
    type: SchemaTypes.String,
    required: true,
  },

  userId: {
    type: SchemaTypes.String,
    required: true,
  },

  data: new Schema ({
    default: {}
  }),

  date: {
    type: SchemaTypes.Date,
    required: true,
  }
})

module.exports = model('answer', AnswerSchema)
