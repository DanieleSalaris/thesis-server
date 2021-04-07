const {createTodo, getTodos} = require('../controllers/to-do-controller')

const prefix = 'api/to-do-list/to-do'
const toDoRoutes = [
  {
    // get all todos
    method: 'get',
    url: `${prefix}/`,
    controller: getTodos
  },

  {
    // create to do
    method: 'post',
    url: `${prefix}/`,
    controller: createTodo
  }
]

module.exports = toDoRoutes
