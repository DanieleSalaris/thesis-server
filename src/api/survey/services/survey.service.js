const QuestionNotFound = require('../errors/question-not-found')
const {parseJSONFile} = require('../../../helpers/utility')

const surveyService = {
  // @todo get from db
  async loadSurveys() {
    return parseJSONFile(process.env.SURVEYS_PATH)
  },

  getSurveyFromId: async (id) => {
    const surveys = await surveyService.loadSurveys()
    // @todo handle surveys not found
    return surveys.find(s => s._id === id)
  },

  getQuestionFromId: async (id) => {
    const surveys = await surveyService.loadSurveys()
    const question = surveys?.questions?.find(question => question._id === id)

    if (!question) {
      throw new QuestionNotFound()
    }

    return {...question, surveyId: 123}
  },

  getQuestions: async (surveyId) => {
    const survey = await surveyService.getSurveyFromId(surveyId)
    return survey.questions
  },

  getQuestion: (surveyId, questionId) => {
    const survey = surveyService.getSurveyFromId(surveyId)
    const question = survey.questions.find(q => q._id === questionId)
    if (!question) {
      throw new QuestionNotFound()
    }
    return question
  }
}

module.exports = surveyService
