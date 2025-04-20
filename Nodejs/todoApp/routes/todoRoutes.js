import express from "express"
import { addTodo, deleteTodo, getTodo, getTodoByEmail, getTodos } from "../controllers/todoController.js"
import { checkToken } from "../middleware/tokenChecker.js"

const todoRoutes = express.Router()

todoRoutes.post('/', checkToken, addTodo)   //loggedIn
todoRoutes.get('/', getTodos)
todoRoutes.get('/:todoId', getTodo)
todoRoutes.get('/getByEmail/:email', getTodoByEmail)
// todoRoutes.put('/:id', updateTodo)
// todoRoutes.delete('/', deleteTodos)
todoRoutes.delete('/:id', checkToken, deleteTodo)

export { todoRoutes }