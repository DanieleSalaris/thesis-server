const User = require('../models/user.schema')
const bcrypt = require('bcrypt')
const UserNotFoundError = require('../errors/user-not-found-error')

const userService = {

  createUser: async (userId, password, role) => {
    try {

      const salt = await bcrypt.genSalt(10)
      const passwordHash = await bcrypt.hash(password, salt)
      await User.create({_id: userId, password, passwordHash, role})

    } catch(err) {
      console.log(err)
    }
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
