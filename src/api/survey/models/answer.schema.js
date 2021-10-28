const {Schema, SchemaTypes, model} = require('mongoose')
const mongooseToCsv = require('mongoose-to-csv')

const AnswerSchema = new Schema({
  // _id: {
  //   type: SchemaTypes.ObjectId,
  //   required: true
  // },

  // instanceId: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   required: true,
  // },

  // _id: {
  //   type: SchemaTypes.String,
  //   required: true,
  // },

  surveyId: {
    // type: SchemaTypes.ObjectId,
    type: SchemaTypes.String,
    required: true,
  },

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
  },

  date: {
    type: SchemaTypes.Date,
    required: true,
  }
})

AnswerSchema.plugin(mongooseToCsv, {
  headers: ['Id', 'UserId', 'InstanceId', 'SurveyId', 'QuestionId', 'QuestionType', 'Data'],
  constraints: {
    Id: '_id',
    UserId: 'userId',
    InstanceId: 'instanceId',
    SurveyId: 'surveyId',
    QuestionId: 'questionId',
    QuestionType: 'questionType',
  },

  virtuals: {
    Data: (doc) => JSON.stringify(doc.data)
  }
})

module.exports = model('answer', AnswerSchema)
