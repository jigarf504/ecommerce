import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
    user_id: {type:String},
    session_id:{type:String},
    payment_status:{type:String},
    order_date:{type:Date},
    total:{type:Number},
    order_lines:{type:Array}
})

export default  mongoose.model("orders",orderSchema)