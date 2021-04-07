class UserNotFoundError extends Error {
  constructor(userId) {
    super(`user ${userId} does not exists`)
    this.name = 'UserNotFoundError'
  }
}

module.exports = UserNotFoundError
