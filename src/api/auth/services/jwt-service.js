const jwt = require('jsonwebtoken')
const JwtNotFound = require('../errors/jwt-not-found')
const JwtNotValid = require('../errors/jwt-not-valid')

const getJwtAlgorithm = () => {
  return process.env.JWT_SIGN_ALGORITHM || 'HS256'
}

const getJwtSecret = () => {
  // @todo throw if secret undefined?
  return process.env.JWT_SECRET
}

const jwtService = {
  createJwt: (payload) => {
    return jwt.sign({...payload}, getJwtSecret(), {expiresIn: '1h', algorithm: getJwtAlgorithm()})
  },

  extractToken: (authorizationHeader) => {
    if (!authorizationHeader) {
      throw new JwtNotFound()
    }
    const token = authorizationHeader.split('Bearer ')[1]

    try {
      return jwt.verify(token, getJwtSecret(), {algorithm: getJwtAlgorithm()})
    } catch (err) {
      throw new JwtNotValid()
    }
  },
}

module.exports = jwtService
