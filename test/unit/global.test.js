const {parseJSONFile} = require('../../src/helpers/utility')

describe('global test', () => {
  it('parse json file', (done) => {
    parseJSONFile('./resources/survey.json',)
      .then(res => {
        console.log('success', res)
        done()
      })
      .catch(err => console.log('fail', err))
  })
})
