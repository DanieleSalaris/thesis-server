const Joi = require('joi')
const {httpStatusCode} = require('./constants')

const validator = {
  body: (schema) => {
    return async (req, res, next) => {
      const {error} = await schema?.validate(req.body)
      const valid = !error

      if (valid) {
        next()
      }
      else {
        const {details} = error
        const message = details.map(i => i.message).join(',')

        res
          .status(httpStatusCode.clientError.UNPROCESSABLE_ENTITY)
          .send({error: message})
      }
    }
  },
}

module.exports = validator
