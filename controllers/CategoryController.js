const categoryModel = require("../models/Category")
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'depjzfj9a',
    api_key: '489915939841262',
    api_secret: '5tBdTUHJ33XMIN3iP-49Rfeps9I',
    // secure: true
});

class CategoryController {
    static createCategory = async (req, res) => {
        try {
            // console.log(req.body)
            // ----------------------------------
            const file = req.files.images
            const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'userImage'
            })

            const { name } = req.body
            const data = new categoryModel({
                name: name,
                images: {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                },
            })
            await data.save()
            res
                .status(201)
                .json({ status: "success", message: "Category added Successfully 😃🍻" });
            // ----------------------------------
            // const data = await categoryModel.create(req.body)
            // res
            // .status(201)
            // .send({ status: "success", message: "Category added Successfully 😃🍻"});
        } catch (err) {
            res.send(err)
        }
    }
    static getAllCategories = async (req, res) => {
        try {
            const allCategories = await categoryModel.find()
            res.status(200).json({
                success: true,
                allCategories
            })
        } catch (err) {
            res.send(err)
        }
    }
    static getCategoryDetail = async (req, res) => {
        try {
            const categoryDetail = await categoryModel.findById(req.params.id)
            res.status(200).json({
                success: true,
                categoryDetail
            })
        } catch (err) {
            res.send(err)
        }
    }
}
module.exports = CategoryController