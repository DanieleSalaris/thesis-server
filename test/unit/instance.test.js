const instanceService = require('../../src/api/survey/services/instance.service')
const {connectDb} = require('../../src/db')

describe('Test instance service', () => {
  before(async () => {
    await connectDb()
    console.log('connected from tests')
  })

  describe('answer', () => {
    it('choice',  (done) => {
      instanceService.setAnswer('1', '1', '002', [2])
        .then((res) => {
          console.log('res', res)
          done()
        })
    })

    // it('array', async () => {
    //   const question = mockSurvey.questions[2]
    //   const answer = {
    //     type: 'array',
    //     value: [
    //       [0],
    //       [0],
    //       [3]
    //     ]
    //   }
    //   await answerService.validateAnswerFormat(answer, question)
    // })
    //
    // it('input', async () => {
    //   const question = mockSurvey.questions[3]
    //   const answer = {
    //     type: 'input',
    //     value: 'abcd'
    //   }
    //   await answerService.validateAnswerFormat(answer, question)
    // })
  })
})
