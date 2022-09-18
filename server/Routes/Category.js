import express from "express";
import {createCategory,caretgoryList} from "../Controllers/category.controller.js";
const router = express.Router();

router.get("/",caretgoryList)
router.post("/create",createCategory)

export default router