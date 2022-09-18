
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
const connection = mongoose.connection
connection.on("connected",() => {
    console.log("conntected database")
})

connection.on("error",() => {
    console.log("Error in connect database")
})

export default mongoose