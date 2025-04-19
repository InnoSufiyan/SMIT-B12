import express from "express"
import { addTodo, getTodo, getTodoByEmail, getTodos } from "../controllers/todoController.js"

const todoRoutes = express.Router()

todoRoutes.post('/', addTodo)
todoRoutes.get('/', getTodos)
todoRoutes.get('/:todoId', getTodo)
todoRoutes.get('/getByEmail/:email', getTodoByEmail)
// todoRoutes.put('/:id', updateTodo)
// todoRoutes.delete('/', deleteTodos)
// todoRoutes.delete('/:id', deleteTodo)

export { todoRoutes }