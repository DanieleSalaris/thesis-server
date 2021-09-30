class UserAlreadyExists extends Error {
  constructor() {
    super('User already exists');
    this.name = 'UserAlreadyExists'
  }
}

module.exports = UserAlreadyExists
