import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
require("dotenv").config()
const app = express();
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extend:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
