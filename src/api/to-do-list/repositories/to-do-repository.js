const ToDo = require('../models/to-do.js')

class ToDoRepository {
  static toDos = []
  static nextId = 1

  static getNextId() {
    const id = this.nextId
    this.nextId++
    return id
  }

  static createOne(title, message, toDoListId) {
    const id = this.getNextId()
    const createdAt = Date.now()
    const toDo = new ToDo(id, title, message, toDoListId, createdAt)
    this.toDos.push(toDo)

    return toDo
  }

  static getFromToDoListId(toDoListId) {
    return this.toDos.filter(toDo => toDo.toDoListId === toDoListId)
  }
}

module.exports = ToDoRepository
