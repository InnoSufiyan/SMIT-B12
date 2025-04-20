import Todo from "../models/Todo.js"
import { errorHandler, successHandler } from "../utils/responseHandlers.js"

export const addTodo = async (req, res) => {
    console.log(req.user, "======>>> req.user")

    const {
        todoMessage
    } = req.body

    if (!todoMessage) {
        return errorHandler(res, 400, "Missing Fields")
    }

    try {
        await Todo.create({
            todoMessage,
            creatorId: req.user._id
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
    const todo = await Todo.find({ complete: complete })

    successHandler(res, 200, "Get Todo by ID", todo)
}

export const deleteTodo = async (req, res) => {
    try {
        console.log(req.user, "==>> req.user")

        const { id } = req.params

        if (!req.user) {
            return errorHandler(res, 400, "No User Details Found")
        }

        const isTodoExist = await Todo.findById(id)

        console.log(isTodoExist, "==>> isTodoExist")

        if (!isTodoExist) {
            return errorHandler(res, 400, "Todo Not Found")
        }

        if (req.user.isAdmin || req.user._id === isTodoExist.creatorId) {

            await Todo.findByIdAndDelete(id)
            return successHandler(res, 200, "Deleted Todo Successfully")
        } else {
            return errorHandler(res, 400, "You cannot delete any others created Todo")
        }
    } catch (error) {
        return errorHandler(res, 400, "You cannot delete any others created Todo", error.message)
    }



}