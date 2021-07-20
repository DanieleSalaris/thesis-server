const InstanceNotFound = require('../errors/instance-not-found')
const answerService = require('./answer.service')
const surveyService = require('./survey.service')
const {parseJSONFile} = require('../../../helpers/utility')

const instanceService = {
  async loadInstances() {
    // @todo handle instances not found
    return await parseJSONFile(process.env.INSTANCES_PATH)
  },

  async getInstances(date) {
    let instances = await instanceService.loadInstances()//mockInstances
    if (date) {
      mockInstances.filter(i => i.date === 'date')
    }
    return instances
  },

  async getInstance(id) {
    const instances = await instanceService.loadInstances()
    const instance = instances.find(i => i._id === id)
    if (!instance) {
      throw new InstanceNotFound()
    }
    return instance
  },

  async getSurvey(instanceId) {
    const instance = await instanceService.getInstance(instanceId)
    return surveyService.getSurveyFromId(instance.surveyId)
  },

  async getQuestions(instanceId) {
    const instance = await instanceService.getInstance(instanceId)
    return await surveyService.getQuestions(instance.surveyId)
  },

  getQuestion: async (instanceId, questionId) => {
    return await surveyService.getQuestionFromId(questionId)
  },

  getAnswers: async (instanceId, userId) => {
    return answerService.getAnswers({instanceId, userId})
  },

  getAnswer: async (instanceId, questionId, userId) => {
    return answerService.getAnswer(instanceId, questionId, userId)
  },

  async setAnswer(instanceId, questionId, userId, value) {
    await instanceService.getSurvey(instanceId)
    return await answerService.answer(instanceId, questionId, userId, value)
  }
}

module.exports = instanceService
