const QuestionNotFound = require('../errors/question-not-found')

const mockSurvey = {
  _id: 1,
  questions: [
    {
      _id: '1',
      type: 'choice',
      data: {
        label: "Indichi qual'è  il suo ambiente  di lavoro",
        minNumberOfChoices: 1,
        maxNumberOfChoices: 3,
        hasOtherOption: true,
        options: [
          {label: 'UFFICIO RUMORE AMBIENTALE - LATO NORD PRIMO PIANO'},
          {label: 'UFFICIO NIR - LATO SUD PRIMO PIANO'},
          {label: 'LAB AS (ACQUE E SPETTROMETRIA) - LATO SUD PRIMO PIANO'}
        ]
      }
    },
    {
      _id: '2',
      type: 'choice',
      data: {
        label: "Quanto tempo passa abitualmente all'interno del'suo ambiente di lavoro?",
        minNumberOfChoices: 1,
        maxNumberOfChoices: 1,
        hasOtherOption: false,
        options: [
          {label: 'Meno di 2 ore'},
          {label: 'Da 2 a 4 ore'},
          {label: 'Da 4 a 6 ore'},
          {label: 'Da 6 a 8 ore'},
          {label: '8 ore o più'}
        ]
      }
    },
    {
      _id: '3',
      type: 'array',
      data: {
        label: 'Quanto è soddisfatto dalle condizioni termiche (temperatura, umidità) nel suo ambiente di lavoro?',
        minNumberOfChoices: 1,
        maxNumberOfChoices: 1,
        subQuestions: [
          {label: 'Inverno'},
          {label: 'Estate'},
          {label: 'Stagioni intermedie (autunno e primavera)'}
        ],
        options: [
          {label: 'Molto insoddisfatto'},
          {label: 'Insoddisfatto'},
          {label: 'Leggermente insoddisfatto'},
          {label: 'Neutro'},
          {label: 'Leggermente soddisfatto'},
          {label: 'Soddisfatto'}
        ]
      }
    },
    {
      _id: '4',
      type: 'input',
      data: {
        type: 'text',
        label: 'Qual è il tuo nome?',
        minLength: 0,
        maxLength: 32
      }
    }
  ]
}

const surveyService = {
  // @todo get from db
  getSurveyFromId: (id) => {
    return mockSurvey
  },

  getQuestionFromId: (id) => {
    const question = mockSurvey.questions.find(question => question._id === id)

    if (!question) {
      throw new QuestionNotFound()
    }

    return {...question, surveyId: 123}
  },

  getQuestions: (surveyId) => {
    const survey = surveyService.getSurveyFromId(surveyId)
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