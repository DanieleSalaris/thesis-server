const express = require('express')
const authMiddleware = require('../../auth/middlewares/auth.middleware')
const instanceService = require('../services/instance.service')
const InstanceNotFound = require('../errors/instance-not-found')
const QuestionNotFound = require('../errors/question-not-found')
const {httpStatusCode} = require('../../../helpers/constants')
const {formatError} = require('../../../helpers/utility')

const router = express.Router()

// GET /instance
// GET /instance/:id
// GET /instance/:id/question/
// GET /instance/:id/question/:id
// GET /instance/:id/question/:id/answer
// PUT /instance/:id/question/:id/answer
// GET /instance/:id/question/:id/answer:answerId

router.get(
  '',
  async (req, res) => {
    const instances = await instanceService.getInstances()
    res.json(instances)
  }
)

router.get(
  '/:instanceId',
  (async (req, res, next) => {
    const {instanceId} = req.params
    try {
      const instance = await instanceService.getInstance(instanceId)
      return res.json(instance)
    }
    catch (e) {
      if (e instanceof InstanceNotFound) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json(formatError(e))
      }
      return next(e)
    }
  })
)

router.get(
  '/:instanceId/question',
  async (req, res, next) => {
    const {instanceId} = req.params
    try {
      const questions = await instanceService.getQuestions(instanceId)
      return res.json(questions)
    }
    catch (e) {
      if (e instanceof InstanceNotFound) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json(formatError(e))
      }
      return next(e)
    }
  }
)

router.get(
  '/:instanceId/question/:questionId',
  ((req, res, next) => {
    const {instanceId, questionId} = req.params
    try {
      const question = instanceService.getQuestion(instanceId, questionId)
      return res.json(question)
    }
    catch (e) {
      if (
        e instanceof InstanceNotFound ||
        e instanceof QuestionNotFound
      ) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json(formatError(e))
      }
      return next(e)
    }
  })
)

router.get(
  '/:instanceId/question/:questionId/answer/',
  authMiddleware.validateJwt,
  authMiddleware.roleUser,
  (async (req, res, next) => {
    const {questionId, instanceId} = req.params
    const {userId} = req.token

    try {
      const answer = await instanceService.getAnswer(instanceId, questionId, userId)
      return res.json(answer)
    } catch (e) {
      if (
        e instanceof InstanceNotFound ||
        e instanceof QuestionNotFound
      ) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json(formatError(e))
      }
      return next(e)
    }
  })
)

router.post(
  '/:instanceId/question/:questionId/answer',
  authMiddleware.validateJwt,
  authMiddleware.roleUser,
  (async (req, res, next) => {
    const {questionId, instanceId} = req.params
    const {value} = req.body
    const {userId} = req.token

    try {
      const answer = await instanceService.setAnswer(instanceId, questionId, userId, value)
      return res
        .status(httpStatusCode.successful.CREATED)
        .json(answer)
    }
    catch (e) {
      if (
        e instanceof InstanceNotFound ||
        e instanceof QuestionNotFound
      ) {
        return res
          .status(httpStatusCode.clientError.NOT_FOUND)
          .json(formatError(e))
      }
      return next(e)
    }
  })
)

module.exports = router
