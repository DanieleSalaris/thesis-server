const express = require('express')
const authMiddleware = require('../../auth/middlewares/auth.middleware')
const surveyMiddleware = require('../middlewares/survey.middleware')
const surveyService = require('../services/survey.service')
const answerService = require('../services/answer.service')
const AnswerNotFound = require('../errors/answer-not-found')
const QuestionNotFound = require('../errors/question-not-found')
const {httpStatusCode} = require('../../../helpers/constants')

const router = express.Router()

router.get(
  '/:id',
  surveyMiddleware.getSurvey
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

    try {
      const question = await answerService.createAnswer(userId, questionId, Date.now(), {})
      return res
        .status(httpStatusCode.successful.CREATED)
        .json(question)
    }
    catch (e) {
      if (e instanceof QuestionNotFound) {
        return res
          .send(httpStatusCode.clientError.NOT_FOUND)
          .json({error: e.message})
      }

      return next(e)
    }
  }
)
module.exports = router
