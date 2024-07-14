const productModel = require("../models/Product")
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'depjzfj9a', 
    api_key: '489915939841262', 
    api_secret: '5tBdTUHJ33XMIN3iP-49Rfeps9I',
    // secure: true
});

class ProductController{
    static getAllProducts = async(req,res) => {
        try{
            const allProducts = await productModel.find()
            res.status(200).json({
                success: true,
                allProducts
            })
        }catch(err){
            res.send(err)
        }
    }

    //Admin
    static createProduct = async(req,res) => {
        try{
            // console.log(req.body)
            // console.log(req.files)
            const file = req.files.images
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath,{
                folder : 'userImage'
            })

            const {name, description, price, stock, rating, category} = req.body
            const data = new productModel({
                name: name,
                description: description,
                price: price,
                stock: stock,
                rating: rating,
                category: category,
                images: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
            })
            const insertedData = await data.save()
            // console.log(insertedData);
            res
            .status(201)
            .json({ status: "success", message: "Product added Successfully 😃🍻",insertedData});
        }catch(err){
            res.send(err)
        }
    }
    static getProductDetail = async(req,res) => {
        try{
            const productDetail = await productModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                productDetail
            })
        }catch(err){
            res.send(err)
        }
    }
    static getAdminProduct = async(req,res) => {
        try{
            const data = await productModel.find()
            res.status(200).json({
                success: true,
                data
            })
        }catch(err){
            res.send(err)
        }
    }
    static updateProduct = async(req,res) => {
        try{
            
        }catch(err){
            res.send(err)
        }
    }
    static deleteProduct = async(req,res) => {
        try{
            const data = await productModel.findByIdAndDelete(req.params.id)
            res
            .status(200)
            .send({ status: "success", message: "Product deleted successfully 😃🍻"});
        }catch(err){
            res.send(err)
        }
    }
}
module.exports = ProductController