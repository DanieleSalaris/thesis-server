const express = require('express')
const surveyMiddleware = require('../middlewares/survey.middleware')

const router = express.Router()

router.get(
  '/:id',
  surveyMiddleware.getSurvey

)
module.exports = router
