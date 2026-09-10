import mongoose from "mongoose";
import { DB_NAME } from "./contants";

( async() => {
    try {
        mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.error("Error",error);
        throw err
    }
})()