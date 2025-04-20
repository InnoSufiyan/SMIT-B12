import { CronJob } from 'cron';
import Todo from './models/Todo.js';
import { connectDB } from './utils/connectDB.js';

connectDB()

const job = new CronJob(
    '*/3 * * * * *', // cronTime   // after every one second
    async function () {
        const toBeDeletedDate = new Date();

        // Subtract 2 days from the current date
        toBeDeletedDate.setDate(toBeDeletedDate.getDate() - 2);

        console.log(toBeDeletedDate, "====>> cron ran successfully")
        const allTodos = await Todo.find()
        allTodos.forEach(async (todo) => {
            console.log(todo, "==>> todo")
            if (todo.createdAt < toBeDeletedDate) {

                console.log("======>> will delete the todo")
                await Todo.findByIdAndDelete(todo._id)
            }
        })
    }, // onTick
    null, // onComplete
    false, // start
);

// new CronJob()