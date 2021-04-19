const surveyService = require('./survey.service')
const AnswerSchema = require('../models/answer.schema')
const Joi = require('joi')

const answerService = {
  validateAnswerFormat: async (answer, question) => {
    // @todo check question format

    if (!answer || !question) {
      return null
    }

    const {type: questionType, data} = question
    const {value} = answer

    switch (questionType) {
      case 'input':
        // @todo improve regex
        const pattern = data.type === 'text' ? /^[a-zA-Z]+$/
            : data.type === 'number' ? /^[0-9]$/  : /^$/
        return await Joi
          .string()
          .regex(pattern)
          .min(data.minLength)
          .max(data.maxLength)
          .required()
          .validateAsync(value)

      case 'choice':
        return await Joi
          .array()
          .min(data.minNumberOfChoices)
          .max(data.maxNumberOfChoices)
          .unique()
          .items(
            Joi.number()
              .min(0)
              .max(data.options.length - 1)
          )
          .required()
          .validateAsync(value)

      case 'array':
        return await Joi
          .array()
          .length(data.subQuestions.length)
          .items(
            Joi.array()
              .min(data.minNumberOfChoices)
              .max(data.maxNumberOfChoices)
              .unique()
              .items(
                Joi.number()
                  .min(0)
                  .max(data.options.length - 1)
              )
          )
          .required()
          .validateAsync(value)
      default:
        break;
    }

    return null
  },

  createAnswer:  async (userId, questionId, date, value) => {
    const question = surveyService.getQuestionFromId(questionId)
    const error = await answerService.validateAnswerFormat(answer, question)

    const {surveyId, question: questionType} = question

    // check if question already exists
    const answer = await AnswerSchema.findOne({
      userId,
      surveyId,
      questionId,
    })

    return await AnswerSchema.create({
      userId,
      questionId,
      surveyId: question.surveyId,
      questionType: question.type,
      value,
      date
    })
  }
}

module.exports = answerService
