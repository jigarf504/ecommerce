import express from "express";
const router = express.Router();
import {sign,signup} from '../Controllers/users.controller.js'
router.post("/signin",sign)
router.post("/signup",signup)


export default router
