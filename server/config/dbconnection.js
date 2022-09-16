
import mongoose from "mongoose";
mongoose.connect(procee.env.MONGO_URL)
const connection = mongoose.connection
connection.on("connected",() => {
    console.log("conntected database")
})

connection.on("error",() => {
    console.log("Error in connect database")
})
export default mongoose;