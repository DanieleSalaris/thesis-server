const userService = require('../services/user.service')
const tokenService = require('../services/jwt-service')
const {httpStatusCode} = require('../../../helpers/constants')
const UserNotFoundError = require('../errors/user-not-found-error')
const JwtNotValid = require('../errors/jwt-not-valid')
const JwtNotFound = require('../errors/jwt-not-found')
const UserAlreadyExists = require('../errors/user-already-exists')

const authController = {
  validateJwt: (req, res, next) => {
    // @todo check existent user
    try {
      req.token = tokenService.extractToken(req.headers.authorization)
    } catch (e) {
      if (e instanceof JwtNotValid || e instanceof JwtNotFound) {
        res
          .status(httpStatusCode.clientError.UNAUTHORIZED)
          .send()
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

  createUser: async (req, res, next) => {
    try {
      const {userId, password, isAdmin} = req.body
      await userService.createUser(userId, password, isAdmin)
    } catch (e) {
      if (e instanceof UserAlreadyExists) {
        return res
          .status(httpStatusCode.clientError.UNPROCESSABLE_ENTITY)
          .json({message: e.message})
      }
      next(e)
    }
    return res
      .status(httpStatusCode.successful.CREATED)
      .send()
  },

  updatePassword: async (req, res, next) => {
    try {
      const {userId, password} = req.body
      await userService.updatePassword(userId, password)
    } catch (e) {
      next(e)
    }

    return res
      .status(httpStatusCode.successful.NO_CONTENT)
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
        return
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
