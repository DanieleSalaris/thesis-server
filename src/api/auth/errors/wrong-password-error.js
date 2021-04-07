class WrongPasswordError extends Error {
  constructor(userId) {
    super(`Wrong password for user: ${userId}`);
    this.name = 'WrongPasswordError'
  }
}

module.exports = WrongPasswordError
