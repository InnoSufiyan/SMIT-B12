import express from "express"
import { forgotPasswordController, isUserLoggedIn, loginController, registerController } from "../controllers/authController.js"

const authRoutes = express.Router()

console.log("===>> koi banda auth tak aya hai")

authRoutes.post('/register', registerController)
authRoutes.post('/login', loginController)
authRoutes.post('/forgotPassword', forgotPasswordController)
authRoutes.get("/isuserloggedin", isUserLoggedIn);
authRoutes.post("/:koiBhiAajaey", (req, res) => {
    res.send(req.params, "======>>>> koi aya")
})

export { authRoutes }