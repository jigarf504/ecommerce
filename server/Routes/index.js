import express from "express";
import Auth from "./Auth.js";
import Category from "./Category.js";
import Product from "./Product.js";
const app = express();
app.use("/auth",Auth);
app.use("/category",Category);
app.use("/product",Product)
export default app;