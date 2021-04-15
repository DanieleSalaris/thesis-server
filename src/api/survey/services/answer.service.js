const surveyService = require('./survey.service')
const AnswerSchema = require('../models/answer.schema')

const answerService = {
  validateAnswerFormat: (answer) => {
    // @todo check question format
    return null
  },

  createAnswer:  async (userId, questionId, date, data) => {
    const question = surveyService.getQuestionFromId(questionId)
    const error = answerService.validateAnswerFormat(data)

    const {surveyId, question: questionType} = question
    const answer = await AnswerSchema.findOne({
      userId,
      surveyId,
      questionId,
    })

    console.log(data)

    return await AnswerSchema.create({
      userId,
      questionId,
      surveyId: question.surveyId,
      questionType: question.type,
      data,
      date
    })
  }
}

module.exports = answerService
