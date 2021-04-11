class QuestionNotFound extends Error {
  constructor() {
    super('question not found');
    this.name = 'QuestionNotFound'
  }
}

module.exports = QuestionNotFound
