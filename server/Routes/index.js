import express from "express";
import Auth from "./Auth.js";
import Category from "./Category.js";
import Product from "./Product.js";
import Payment from "./Payment.js";
const app = express();
app.use("/auth",Auth);
app.use("/category",Category);
app.use("/products",Product)
app.use("/session",Payment)
export default app;