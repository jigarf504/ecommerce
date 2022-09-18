import mongoose from "mongoose";
const orderLineSchema = mongoose.Schema({
    order_id: {type:String},
    product_id:{type:String},
    product_name:{type:String},
    price:{type:Number}
})

export default  mongoose.model("order_lines",orderLineSchema)