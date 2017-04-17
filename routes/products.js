const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Product = require('../models/product');

// router.get('/getproducts', (req, res, next) => {
//     console.log("Get All Products requested");
//     db.products.find(function(err, products){
//         if(err){
//             res.send(err);
//         }
//         res.json(products);
//     });
// });

router.post('/addproduct', (req, res, next) => {
    console.log("Add Product route reached");
    let newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.desc,
        quantity: req.body.qty,
        imageUrl: req.body.image,
        department: req.body.department
    });
    Product.addProduct(newProduct, (err, product) => {
        if(err){
            res.json({success: false, msg:'Failed to add product'});
            console.log(err);
        } else {
            res.json({success: true, msg:'Product successfully added'});
        }
    });
});

//Update Product

//Delete Product


module.exports = router;