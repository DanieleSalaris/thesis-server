const express = require('express')
const authMiddleware = require('../../auth/middlewares/auth.middleware')
const surveyService = require('../services/survey.service')
const answerService = require('../services/answer.service')
const QuestionNotFound = require('../errors/question-not-found')
const WrongAnswer = require('../errors/wrong-answer')
const {httpStatusCode} = require('../../../helpers/constants')

const router = express.Router()

router.get(
  '/answer-csv',
  async (req, res) => {
    console.log('answer csv')
    const filePath = await answerService.getAnswersCsv()

    res.download(filePath)
  }
)

router.get(
  '/:id',
  (req, res) => {
  const {id} = req.params

  res.json(surveyService.getSurveyFromId(id))
},
)

router.get(
  '/:surveyId/question/:questionId',
  (req, res, next) => {
    try {
      const {questionId} = req.params
      const question = surveyService.getQuestionFromId(questionId)
      return res.json(question)
    } catch (e) {
      if (e instanceof QuestionNotFound) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json({
            error: e.name,
            message: e.message
          })
      }
      else {
        return next(e)
      }
    }
  }
)

router.post(
  '/:surveyId/question/:questionId/answer',
  authMiddleware.validateJwt,
  authMiddleware.roleUser,
  async (req, res, next) => {
    const {surveyId, questionId, questionType} = req.params
    const {userId} = req.token
    const {data} = req.body


    try {
      const question = await answerService.createAnswer(userId, questionId, Date.now(), data)
      return res
        .status(httpStatusCode.successful.CREATED)
        .json(question)
    }
    catch (e) {
      if (e instanceof QuestionNotFound) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json({error: e.message})
      }

      else if (e instanceof WrongAnswer) {
        return res
          .status(httpStatusCode.clientError.UNPROCESSABLE_ENTITY)
          .json({error: e.message})
      }

      return next(e)
    }
  }
)
module.exports = router
