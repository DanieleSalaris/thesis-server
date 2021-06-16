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

  _id: {
    type: SchemaTypes.String,
    required: true,
  },

  // surveyId: {
  //   // type: SchemaTypes.ObjectId,
  //   type: SchemaTypes.String,
  //   required: true,
  // },

  instanceId: {
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

  // data: new Schema ({
  //   default: {}
  // }, {strict: false}),

  data: {
    type:  Object,
    required: true,
  }



  // date: {
  //   type: SchemaTypes.String,
  //   required: true,
  // }
})

module.exports = model('answer', AnswerSchema)
