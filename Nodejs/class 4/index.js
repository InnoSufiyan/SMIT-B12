import express from "express"
import { connectDB } from "./utils/connectDB.js";
import { authRoutes } from "./routes/authRoutes.js";

const app = express()

app.use(express.json())

connectDB()


app.use('/auth', authRoutes)
// app.use('/users', usersRoutes)
// app.use('/products', productsRoutes)
// app.use('/tours', toursRoutes)

app.listen(8000, () => {
    console.log("dukaan khul gai hai")
})