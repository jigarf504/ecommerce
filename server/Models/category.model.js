import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
    name: {type:String},
    is_active: {type:Boolean,default:true}
})

export default mongoose.model("categories",categorySchema)