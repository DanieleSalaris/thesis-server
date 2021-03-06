const surveyService = require('./survey.service')
const AnswerSchema = require('../models/answer.schema')
const Joi = require('joi')
const WrongAnswer = require('../errors/wrong-answer')
const fs = require('fs')
const format = require('date-fns/format')

const answerService = {
  validateAnswerFormat: async (value, question) => {
    // @todo check question format

    try {

      if (!value || !question) {
        return null
      }

      const {type: questionType, data} = question

      switch (questionType) {
        case 'input':
          // @todo improve regex
          const pattern = data.type === 'text' ? /^[a-zA-Z]+$/
            : data.type === 'number' ? /^[0-9]+$/ : /^$/
          await Joi
            .string()
            .regex(pattern)
            .min(data.minLength)
            .max(data.maxLength)
            .required()
            .validateAsync(value)
          break

        case 'choice':
          await Joi
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
          break

        case 'array':
          await Joi
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
          break

        default:
          break;
      }

    } catch (err) {
      return err
    }

    return null
  },

  createAnswer:  async (userId, questionId, date, value) => {
    // const question = surveyService.getQuestionFromId(questionId)
    // const error = await answerService.validateAnswerFormat(value, question)
    //
    // if (error) {
    //   throw new WrongAnswer(error.message)
    // }
    //
    // const {surveyId, type: questionType} = question
    //
    // const formattedDate = format(date, 'dd/MM/yyyy')
    //
    // // check if question already exists
    // const answer = await AnswerSchema.findOne({
    //   userId,
    //   surveyId,
    //   questionId,
    //   date: formattedDate
    // })
    //
    // const valueToSave = {
    //   userId,
    //   questionId,
    //   surveyId: question.surveyId,
    //   questionType: question.type,
    //   value,
    //   date: formattedDate,
    // }
    //
    // if (answer) {
    //   return AnswerSchema.updateOne({_id: answer._id}, valueToSave)
    // }
    // return await AnswerSchema.create(valueToSave)

  },

  answer: async (instanceId, surveyId, questionId, userId, value) => {
    // const question = surveyService.getQuestionFromId(questionId)

    const question = await surveyService.getQuestionFromSurveyIdQuestionId(surveyId, questionId)
    const error = await answerService.validateAnswerFormat(value, question)

    if (error) {
      throw new WrongAnswer(error.message)
    }

    // const _id = answerService.formatAnswerId(instanceId, question._id, userId)
    const date = new Date()
    const valueToSave = {
      // _id,
      instanceId,
      userId,
      questionId,
      surveyId,
      questionType: question.type,
      data: value,
      date,
    }

    return AnswerSchema.create(valueToSave)
    // return AnswerSchema.updateOne({_id}, valueToSave, {upsert: true})
    // if (answer) {
    //   return AnswerSchema.updateOne({_id: answer._id}, valueToSave)
    // }
    // return await AnswerSchema.create(valueToSave)
  },

  getAnswer: async (instanceId, questionId, userId) => {
    //const _id = answerService.formatAnswerId(instanceId, questionId, userId)
    return AnswerSchema
      .find({instanceId, questionId, userId})
      .sort('date')
      .limit(1)
  },

  getAnswers: async (filter) => {
    return AnswerSchema.find(filter)
  },

  formatAnswerId: (instanceId, questionId, userId) => {
    return `${instanceId}${questionId}${userId}`
  },

  getAnswersCsv: async (instanceId) => {
    const filePath = `${process.env.TMP_FILES}/instance-${instanceId}.csv`
    return new Promise((resolve, reject) => {
      AnswerSchema.findAndStreamCsv({instanceId})
        .pipe(fs.createWriteStream(filePath))
        .on('close', () => resolve(filePath))
    })
  }
}

module.exports = answerService
