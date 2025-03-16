import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI)
        console.log(process.env.STUDENT)
        // Add a small delay before connecting
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}