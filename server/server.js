import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser"

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import Router from "./Routes/index.js"


const app = express({
    MONGODB_URL:process.env.MONGODB_URI,
    PORT:process.env.PORT,
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extend:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(Router)
mongoose.connect(process.env.MONGODB_URI)
app.use("/public", express.static(__dirname + '/public'));
const connection = mongoose.connection
connection.on("connected",() => {
    console.log("conntected database")
})

connection.on("error",() => {
    console.log("Error in connect database")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {console.log(`Server connected on port ${PORT}`)})