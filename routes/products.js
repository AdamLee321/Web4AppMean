const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Product = require('../models/product');
const mongojs = require('mongojs');
const db = mongojs('mongodb://root:admin@ds163020.mlab.com:63020/web4mean');

//Get All Products
 router.get('/getproducts', (req, res, next) => {
     db.products.find(function(err, products){
        if(err){
            res.json({success: false, msg:'Failed to get products'});
        } else{
            res.json(products);
        }
     });
    //res.json({products: req.products}); 
 });

 //Get One Product
 router.get('/getproduct/:id', (req, res, next) => {
     db.products.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, product){
        if(err){
            res.json({success: false, msg:'Failed to get product'});
        } else{
            res.json(product);
        }
     });
    //res.json({products: req.products}); 
 });

//Add Products
router.post('/addproduct', (req, res, next) => {
    console.log("Add Product route reached");
    var product = req.body;
    if(!product.name){
        res.json({
            "error": "Bad Data"
        });
    } else{
        db.products.save(product, function(err, product){
            if(err){
             console.log(err);
         } else {
             res.json({success: true, msg:'Product successfully added'});
            console.log(product);
         }
        });
    }
});

//Update Product
router.put('/product/:id', function(req,res,next){
    var product = req.body;
    var updProduct = {};

    if(product.name){
        updProduct.name = product.name;
    }
    if(product.price){
        updProduct.price = product.price;
    }
    if(product.description){
        updProduct.description = product.description;
    }
    if(product.quantity){
        updProduct.quantity = product.quantity;
    }
    if(product.imageUrl){
        updProduct.imageUrl = product.imageUrl;
    }
    if(product.department){
        updProduct.department = product.department;
    }
    if(!updProduct){
        res.status(400);
        res.json({
            "error":"Bad Data"
            
        });
        console.log(updProduct);
    } else{
        db.products.update({_id: mongojs.ObjectId(req.params.id)}, updProduct, {} ,function(err, product){
            if(err){
                res.send(err);
            } else{
                res.json(product);
                console.log("Product Updated");
            }
        });
    }
});

//Delete Product
router.delete('/product/:id', function(req,res,next){
    db.products.remove({_id: mongojs.ObjectId(req.params.id)},function(err, product){
        if(err){
            res.send(err);
        } else{
            res.json({success: true, msg:'Product successfully removed'});
            console.log("Product Removed");
        }
    });
});


module.exports = router;