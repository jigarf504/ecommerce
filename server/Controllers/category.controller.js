import categoryModel from "../Models/category.model.js";
import CategoryModel from "../Models/category.model.js";
export const caretgoryList = async  (req,res) => {
    try {
        const data = await CategoryModel.find().select({name:1})
        res.status(200).json({status: data ? true : false,data})
    } catch(err) {
        res.status(500).json({ message: "Something went wrong!", error: err.message  });
    }
}
export const createCategory = async (req,res) => {
    try {
        const {name} = req.body
        const iscategoryExit = await categoryModel.findOne({name,is_active:true})
        if (iscategoryExit) {
            return res.status(400).json({ message: "Category is already available" });
        }
        const result = await categoryModel.create(req.body)
        res.status(200).json({status: result ? true : false,data:result})
    } catch(err) {
        res.status(500).json({ message: "Something went wrong!", error: err.message  });
    }
}