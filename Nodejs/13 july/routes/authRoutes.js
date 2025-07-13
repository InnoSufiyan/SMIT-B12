import {Router} from "express"
import { loginHandler, signupHandler, verifyEmail } from "../controllers/authController.js"

export const authRoutes = Router()

authRoutes.post('/signup', signupHandler)
authRoutes.post('/login', loginHandler)
authRoutes.post('/verifyEmail', verifyEmail)

