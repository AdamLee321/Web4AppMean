const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Product Schema
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

const Product = module.exports = mongoose.model('Product', ProductSchema);

module.exports.addProduct = function(newProduct, callback){
    newProduct.save(callback);
}

 module.exports.getProducts = function(products, callback){
     Product.find(products, callback);
}

// module.exports.getOneProduct = function(product, callback){
//     Product.findOne({_id: mongoose.ObjectId(req.params.id)})
// }