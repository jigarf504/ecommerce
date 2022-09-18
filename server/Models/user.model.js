import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name: {type:String},
    gender: {type:String},
    email: {type:String},
    password: {type:String},
    is_active:{type:Boolean,default:true},
})

export default mongoose.model("users",userSchema)