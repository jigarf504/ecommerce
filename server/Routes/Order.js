import express from "express";
import { orderList } from "../Controllers/order.controller.js";
import auth from "../Middleware/auth.js";
const router = express.Router();

router.get("/", [auth], orderList);
export default router