const surveyService = require('../services/survey.service')
const AnswerNotFound = require('../errors/answer-not-found')

const surveyMiddleware = {
  getSurvey: (req, res) => {
    const {id} = req.params

    res.json(surveyService.getSurveyFromId(id))
  },

  getAnswer: (req, res) => {
    try {

    } catch (e) {
      if (e instanceof AnswerNotFound) {
        console.log(e.message)
        console.log(e)
      }
      else {
        return next
      }
    }
  }
}

module.exports = surveyMiddleware
