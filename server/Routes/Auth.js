import express from "express";
import { sign, signup, getUser } from "../Controllers/users.controller.js";
import auth from "../Middleware/auth.js";
const router = express.Router();
router.post("/signin", sign);
router.post("/signup", signup);
router.get("/user", [auth], getUser);

export default router
