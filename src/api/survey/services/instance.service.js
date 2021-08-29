const InstanceNotFound = require('../errors/instance-not-found')
const answerService = require('./answer.service')
const surveyService = require('./survey.service')
const {parseJSONFile} = require('../../../helpers/utility')
const InstanceSchema = require('../models/instance.schema')
const format = require('date-fns/format')

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
    // get instance from db
    let instance = InstanceSchema.findById(id)
    if (instance) {
      return instance
    }

    // if instance not found get instance from config file
    const instances = await instanceService.loadInstances()
    instance = instances.find(i => i._id === id)
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
    const {_id: surveyId} = await instanceService.getSurvey(instanceId)
    return await answerService.answer(instanceId, surveyId, questionId, userId, value)
  },

  async singletonGetTodayInstance() {
    //@todo transaction
    const today = new Date(2021, 8, 25)
    const todayFormatted = format(today, 'dd/MM/yyyy')
    let instance = await InstanceSchema.findOne({date: todayFormatted})

    if (!instance) {
      const res = await InstanceSchema.create({date: todayFormatted, surveyId: '3'})
      instance = res._doc
    }

    return instance
  }
}

module.exports = instanceService
