import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
    user_id: {type:String},
    total:{type:Number},
    order_date:{type:Date}
})

export default  mongoose.model("orders",orderSchema)