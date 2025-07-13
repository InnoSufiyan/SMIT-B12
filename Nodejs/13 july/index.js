import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { authRoutes } from "./routes/authRoutes.js"
import { connectDB } from "./utils/connectDB.js"

const app = express()

dotenv.config();
connectDB();

app.use(cors())     //koi bhi aajao

app.use(express.json())  //frontend se kuch bhi aasakey

app.use('/api/auth', authRoutes)

app.listen('3000', ()=> {
  console.log("===>>> server chal raha hai")
})