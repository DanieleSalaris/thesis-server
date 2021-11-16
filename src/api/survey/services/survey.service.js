const QuestionNotFound = require('../errors/question-not-found')
const {parseJSONFile} = require('../../../helpers/utility')
const AnswerSchema = require('../models/answer.schema')

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

  getQuestionFromSurveyIdQuestionId: async (surveyId, questionId) => {
    const surveys = await surveyService.loadSurveys()
    const question = surveys?.find(survey => survey._id === surveyId)
      ?.questions?.find(question => question._id === questionId)

    if (!question) {
      throw new QuestionNotFound()
    }

    return question
  },

  getQuestion: (surveyId, questionId) => {
    const survey = surveyService.getSurveyFromId(surveyId)
    const question = survey.questions.find(q => q._id === questionId)
    if (!question) {
      throw new QuestionNotFound()
    }
    return question
  },

  async getAverage(surveyId) {
    // it works only with question type choice
    if (!surveyId) {
      return;
    }

    const questions = (await surveyService.getQuestions(surveyId))
      .filter(el => el.type === 'choice')
      .map(val => ({
        _id: val._id,
        count: val.data.options.length
      }))
    const answers = await AnswerSchema.aggregate([
      {$match: {surveyId, questionType: 'choice'}},
      {$project: {
        _id: 0,
        questionId: 1,
        value: {$arrayElemAt: ["$data", 0]}
      }},
      {$group: {
        _id: "$questionId",
        average: {$avg: "$value"}
      }},
      {$sort: {_id: 1}}
    ])

    return answers.map(a => ({
      questionId: a._id,
      rate: a.average / (questions.find(q => q._id === a._id).count - 1)
    }))
  }
}

module.exports = surveyService
