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
    const { limit, page } = req.query
    let limitOfRecords
    if (!limit) {
        limitOfRecords = 10
    } else {
        limitOfRecords = limit
    }
    let skip = (page - 1) * limitOfRecords
    const countNumbers = await Todo.countDocuments()
    const allTodos = await Todo.find().limit(limitOfRecords).skip(skip).sort({ createdAt: -1 }).select('-__v')

    console.log(countNumbers, "==>> countNumbers")

    successHandler(res, 200, "All Todos get successfully", allTodos, countNumbers)
}

export const getTodo = async (req, res) => {
    console.log(req.params, "===>>> req.params")
    const { todoId } = req.params
    const todo = await Todo.findById(todoId)

    successHandler(res, 200, "Get Todo by ID", todo)
}
export const getTodoByEmail = async (req, res) => {
    console.log(req.params, "===>>> req.params")
    const { email } = req.params
    const { complete } = req.query
    const todo = await Todo.find({ creatorEmail: email, complete: complete })

    successHandler(res, 200, "Get Todo by ID", todo)
}

