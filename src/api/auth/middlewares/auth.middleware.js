const userService = require('../services/user.service')
const tokenService = require('../services/jwt-service')
const {httpStatusCode} = require('../../../helpers/constants')
const UserNotFoundError = require('../errors/user-not-found-error')
const JwtNotValid = require('../errors/jwt-not-valid')
const JwtNotFound = require('../errors/jwt-not-found')


const authController = {
  validateJwt: (req, res, next) => {
    // @todo check existent user
    try {
      req.token = tokenService.extractToken(req.headers.authorization)
    } catch (e) {
      if (e instanceof JwtNotValid || e instanceof JwtNotFound) {
        res.send(httpStatusCode.clientError.UNAUTHORIZED)
      }
      else {
        throw e
      }
      return
    }

    next()
  },

  roleAdmin: (req, res, next) => {
    const {token} = req
    if (token.role !== 'admin') {
      return res
        .status(httpStatusCode.clientError.UNAUTHORIZED)
        .send()

    }
    next()
  },

  roleUser: (req, res, next) => {
    const {token} = req
    if (token.role !== 'user') {
      return res
        .status(httpStatusCode.clientError.UNAUTHORIZED)
        .send()
    }
    next()
  },

  createUser: async (req, res) => {
    try {
      const {userId, password, role} = req.body
      await userService.createUser(userId, password, role)
    } catch (e) {
      console.log('error:', e)
      return res
        .status(httpStatusCode.serverError.INTERNAL_SERVER_ERROR)
        .send()

    }
    return res
      .status(httpStatusCode.successful.CREATED)
      .send()
  },

  login: async (req, res, next) => {
    let token
    try {
      const {userId, password} = req.body
      const user = await userService.login(userId, password)
      token = tokenService.createJwt(user)
    } catch (err) {
      if (err instanceof UserNotFoundError) {
        res
          .status(httpStatusCode.clientError.UNAUTHORIZED)
          .send()
      }
      else { // unknown error
        return next(err)
      }
    }

    res
      .status(httpStatusCode.successful.OK)
      .send({token})
  },
}


module.exports = authController

// exports.loginController = (req, res) => {
//   const token = loginService()
//   res.send(`GET login, secret: ${token}`)
// }
