import express from "express"
import dotenv from "dotenv"
import { authRoutes } from "./routes/authRoutes.js"
import { todoRoutes } from "./routes/todoRoutes.js"
import { connectDB } from "./utils/connectDB.js"

dotenv.config()

const app = express()

app.use(express.json())

connectDB();

//todo application

app.use('/auth', authRoutes)

app.use('/todo', todoRoutes)

// app.use('/products', productsRoutes)


const PORT = process.env.PORT //5000

app.listen(PORT, () => {
    console.log("Server chal raha hai " + PORT + " per")
})