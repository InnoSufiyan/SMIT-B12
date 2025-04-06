import Todo from "../models/Todo.js"
import { errorHandler, successHandler } from "../utils/responseHandlers.js"

export const addTodo = async (req, res) => {
    const {
        todoMessage,
        creatorEmail
    } = req.body

    if (!todoMessage || !creatorEmail) {
        return errorHandler(res, 400, "Missing Fields")
    }

    try {
        await Todo.create({
            todoMessage,
            creatorEmail
        })

        return successHandler(res, 200, "Todo Created Successfully")
    } catch (error) {
        return errorHandler(res, 400, "Code phat gaya", error.message)
    }
}

export const getTodos = async (req, res) => {
    const allTodos = await Todo.find()

    successHandler(res, 200, "All Todos get successfully", allTodos)
}

export const getTodo = async (req, res) => {
    const {email} = req.params
    const todo = await Todo.find({creatorEmail: email})

    successHandler(res, 200, "Get Todo by ID", todo)
}