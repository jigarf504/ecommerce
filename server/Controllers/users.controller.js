import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "../Models/user.model.js"
const secret = "MKd09Y6Gq9A4nmq1TYP8IB+WQ5bceHa3GAqMF"
const EXPIRE_TIME = "1h"
export const sign = async (req,res) => {
    try {
        const {username,password} = req.body
        const existUser = await UserModel.findOne({username})
        if (!existUser) {
            return res.status(400).json({ message: "Username is not registered" });
        }
        if (existUser.is_active === false) {
            return res.status(400).json({ message: "User is inactive" });
        }
        const isPasswordCorrent = await bcrypt.compare(password,existUser.password)
        if (!isPasswordCorrent) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ email: existUser.email, id: existUser._id }, secret, { expiresIn: EXPIRE_TIME });
        res.status(200).json({ result: existUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong!", error: err.message  });
    }
}

export const signup = async (req, res) => {
    try {
        const {email,password} = req.body
        const existUser = await UserModel.findOne({email})

        if (existUser) {
            return res.status(400).json({ message: "Email address is not available" });
        }
        const hashPassword = await bcrypt.hash(password,12)
        const requestObj = {...req.body}
        requestObj["password"] = hashPassword

        const result = await UserModel.create(requestObj)
        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: EXPIRE_TIME });
        res.status(201).json({ result, token });
    } catch(err) {
        res.status(500).json({ message: "Something went wrong!", error: err.message  });
    }

}