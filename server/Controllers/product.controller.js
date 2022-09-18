import productModel from "../Models/product.model.js";
export const productList = async (req,res) => {
    try {
        let { pageNumber, pageSize} = req.query;
        pageNumber = pageNumber || 1
        pageSize = pageSize || 10
        const startIndex = (Number(pageNumber) - 1) * pageSize; // get the starting index of every page
        const total = await productModel.find().countDocuments({});
        const products = await productModel.find().limit(Number(pageSize)).skip(Number(startIndex));
        res.json({ entities: products, currentPage: Number(pageNumber), numberOfPages: Math.ceil(total / Number(pageNumber)), totalCount : total});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const createProduct = async (req,res) => {
    try {
        const data = await  productModel.create(req.body)
        if (data) {
            res.status(200).json({status: true,message:"The product is added successfully.",data})
        } else {
            res.status(200).json({status: false,message:"Something went wrong in product update process."})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const updateProduct = async (req,res) => {
    try {
        const {id} = req.body
        const product = await productModel.findByIdAndUpdate(id,req.body,{new:true})
        if (product) {
            res.status(200).json({status: true,message:"Product is update successfully.",data: product})
        } else {
            res.status(200).json({status: false,message:"Something went wrong in product update process.",data: product})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const deleteProduct = async (req,res) => {
    try {
        const {id} = req.body
        const isDelete = await productModel.findByIdAndDelete(id)
        if (isDelete) {
            res.status(200).json({status: true,message:"Product is deleted successfully.!"})
        } else {
            res.status(200).json({status: false,message:"Something went wrong. Please try again"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}