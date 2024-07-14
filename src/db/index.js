import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
    try {
        const connectionInstant=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !!`)
    } catch (error) {
        console.log('MongoDB Connection FAILED',error)
    }
}

export default connectDB;