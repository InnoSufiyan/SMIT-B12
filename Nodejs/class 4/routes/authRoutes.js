import express from 'express'
import { signupController } from '../controller/authController.js'

export const authRoutes = express.Router()

authRoutes.post('/signup', signupController)
// authRoutes.post('/login', loginController)
// authRoutes.post('/forgotPassword', forgotPasswordController)
// authRoutes.post('/resetPassword', resetPasswordController)