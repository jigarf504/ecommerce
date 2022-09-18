import express from "express";
import {createCategory,caretgoryList} from "../Controllers/category.controller.js";
const router = express.Router();

router.get("/",productList)
router.post("/create",createProduct)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)

export default router