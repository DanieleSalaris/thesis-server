const express = require('express')
const surveyMiddleware = require('../middlewares/survey.middleware')
const surveyService = require('../services/survey.service')
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
module.exports = router
