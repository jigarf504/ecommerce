import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import OrderModel from "../Models/order.model.js";
dotenv.config();
const secret =
  process.env.TOKEN_SECRET || "MKd09Y6Gq9A4nmq1TYP8IB+WQ5bceHa3GAqMF";
export const orderList = async (req, res) => {
  try {
    let authorization = req.headers.authorization;
    let decodedData = await jwt.verify(authorization, secret);
    if (!decodedData || decodedData?.id === undefined) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    const user_id = decodedData?.id || null;
    const orders = await OrderModel.find({ user_id });
    res.status(200).json({ message: "Orders list", status: true, orders });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong!", error: err.message });
  }
};
