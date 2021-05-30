const InstanceNotFound = require('../errors/instance-not-found')
const answerService = require('./answer.service')
const surveyService = require('./survey.service')

const mockInstances = [
  {
    _id: '1',
    surveyId: 1,
    date: '10-06-2021',
  },
  {
    _id: '2',
    surveyId: 1,
    date: '15-06-2021',
  },
  {
    _id: '2',
    surveyId: 1,
    date: '18-06-2021',
  }
]

const instanceService = {
  getInstances: (date) => {
    let instances = mockInstances
    if (date) {
      mockInstances.filter(i => i.date === 'date')
    }
    return instances
  },

  getInstance: (id) => {
    const instance = mockInstances.find(i => i._id === id)
    if (!instance) {
      throw new InstanceNotFound()
    }
    return instance
  },

  getSurvey: (instanceId) => {
    const instance = instanceService.getInstance(instanceId)
    return surveyService.getSurveyFromId(instance.surveyId)
  },

  getQuestions: (instanceId) => {
    const instance = instanceService.getInstance(instanceId)
    return surveyService.getQuestions(instance.surveyId)
  },

  getAnswer: (instanceId, questionId) => {

  },

  setAnswer: async (instanceId, questionId, userId, value) => {
    instanceService.getSurvey(instanceId)
    return await answerService.answer(instanceId, questionId, userId, value)
  }
}

module.exports = instanceService
