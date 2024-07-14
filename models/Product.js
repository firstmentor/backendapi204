const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 1
    },
    rating: {
        type: Number,
        default: 0,
        required: true
    },
    // images: [   
    //     {
    //     public_id: {
    //         type: String,
    //         // required: true
    //     },
    //     url: {
    //         type: String,
    //         // requiredd: true,
    //     },
    //     },
    // ],
    images: {
        public_id: {
            type: String,
            // required: true
        },
        url: {
            type: String,
            // requiredd: true,
        },
    },                            
    category: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });


var productModel = mongoose.model('products', productSchema);
module.exports = productModel;