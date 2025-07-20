import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import { authRoutes } from "./routes/authRoutes.js"
import { connectDB } from "./utils/connectDB.js"
import helmet from "helmet"
import mongoSanitize from "express-mongo-sanitize"
import { Redis } from "ioredis"

const app = express()

dotenv.config();
connectDB();

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

app.use(cors())     //koi bhi aajao
// app.use(helmet())
app.use(express.json())  //frontend se kuch bhi aasakey
app.use('/api/auth', authRoutes)

app.listen('3000', ()=> {
  console.log("===>>> server chal raha hai")
})