import express from "express"
import { forgotPasswordController, loginController, registerController } from "../controllers/authController.js"

const authRoutes = express.Router()

console.log("===>> koi banda auth tak aya hai")

authRoutes.post('/register', registerController)
authRoutes.post('/login', loginController)
authRoutes.post('/forgotPassword', forgotPasswordController)

export { authRoutes }