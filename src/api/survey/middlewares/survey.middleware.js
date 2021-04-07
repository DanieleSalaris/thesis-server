
const surveyMiddleware = {
  getSurvey: (req, res) => {
    const {id} = req.params

    res.send({surveyId: id})
  }
}

module.exports = surveyMiddleware
