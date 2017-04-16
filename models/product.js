const mongoose = require('mongoose');
const config = require('../config/database');

//Product Schema
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
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