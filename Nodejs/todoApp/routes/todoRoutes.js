import express from "express"
import { addTodo, getTodo, getTodos } from "../controllers/todoController.js"

const todoRoutes = express.Router()

todoRoutes.post('/', addTodo)
todoRoutes.get('/', getTodos)
todoRoutes.get('/:email', getTodo)
// todoRoutes.put('/:id', updateTodo)
// todoRoutes.delete('/', deleteTodos)
// todoRoutes.delete('/:id', deleteTodo)

export { todoRoutes }