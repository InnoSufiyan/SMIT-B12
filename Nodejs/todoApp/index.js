import express from "express"
import { CronJob } from 'cron';
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

// cron job

// const job = new CronJob(
// 	'*/3 * * * * *',
// 	function () {
// 		console.log('You will see this message 3 seconds');
// 	},
//     function () {
// 		console.log('completed');
// 	}, // 👈 ignore onComplete
// 	true, 
// 	'America/Los_Angeles'
// );

// job.start();

// setTimeout(() => {
// 	job.stop();

// 	console.log('Job complete ya stop ho gaya!'); // 👈 manual "onComplete"
// }, 6000);



const PORT = process.env.PORT //5000

app.listen(PORT, () => {
    console.log("Server chal raha hai " + PORT + " per")
})