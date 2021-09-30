const User = require('../models/user.schema')
const bcrypt = require('bcrypt')
const UserNotFoundError = require('../errors/user-not-found-error')
const UserAlreadyExists = require('../errors/user-already-exists')
const Joi = require('joi')

const userService = {

  generatePasswordHash: async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  },

  validateUserFormat: async (userId, password, isAdmin) => {
    // throws ValidationError if not valid
    return await Joi
      .object().keys({
        userId: Joi.string().min(3).max(64).required(),
        password: Joi.string().min(8).max(128).required(),
        isAdmin: Joi.boolean()
      }).validateAsync({userId, password, isAdmin})
  },

  createUser: async (userId, password, isAdmin) => {
      await userService.validateUserFormat(userId, password, isAdmin)
      const passwordHash = await userService.generatePasswordHash(password)

      const role = isAdmin ? 'admin' : 'user'
      try {
        await User.create({_id: userId, passwordHash, role})
      } catch (e) {
        if (e.code === 11000) {
          throw new UserAlreadyExists()
        }
      }

  },

  updatePassword: async (userId, password) => {
    await userService.validateUserFormat(userId, password)
    const passwordHash = await userService.generatePasswordHash(password)
    const res = await User.findOneAndUpdate({_id: userId}, {passwordHash}, {useFindAndModify: true})
    console.log({userId, password, res})
  },

  login: async (userId, password) => {
    // @todo handle error
    const user = await User.findOne({_id: userId})
    if (!user) {
      throw new UserNotFoundError
    }

    const rightPassword = await bcrypt.compare(password, user?.passwordHash)
    if (!rightPassword) {
      throw new UserNotFoundError(userId)
    }

    return {
      userId: user.id,
      role: user.role
    }
  }
}

module.exports = userService
