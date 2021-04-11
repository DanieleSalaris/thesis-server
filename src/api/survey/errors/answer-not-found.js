class AnswerNotFound extends Error {
  constructor() {
    super('answer not found');
    this.name = 'AnswerNotFound'
  }
}

module.exports = AnswerNotFound
