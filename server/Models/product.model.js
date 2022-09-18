import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: {type:String},
    category: {type:Array},
    image:{type:String},
    price:{type:Number},
    is_active:{type:Boolean,default:true}
})

export default  mongoose.model("products",productSchema)