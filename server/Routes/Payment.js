
import express from "express";
import {generateSession,updateOrderStatus} from "../Controllers/payment.controller.js"
const router = express.Router();

router.post("/generate",generateSession)
router.post('/updatestatus',updateOrderStatus)
export default router