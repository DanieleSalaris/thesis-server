class WrongAnswer extends Error {
  constructor(message) {
    super(message);
    this.name = 'WrongAnswer'
  }
}

module.exports = WrongAnswer
