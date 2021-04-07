class JwtNotValid extends Error {
  constructor() {
    super('token not found');
    this.name = 'JwtNotFound'
  }
}

module.exports = JwtNotValid
