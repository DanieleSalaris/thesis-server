class ToDo {
  constructor(
    id,
    title,
    message,
    toDoListId,
    createdAt
  ) {
    this.id = id
    this.title = title
    this.message = message
    this.toDoListId = toDoListId
    this.createdAt = createdAt
  }
}

module.exports = ToDo
