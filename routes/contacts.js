const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Contact = require('../models/contact');
const mongojs = require('mongojs');
const db = mongojs('mongodb://root:admin@ds163020.mlab.com:63020/web4mean');

//Add Contacts
router.post('/addcontact', (req, res, next) => {
    console.log("Add Contact route reached");
    var contact = req.body;
    if(!contact.name){
        res.json({
            "error": "Bad Data"
        });
    } else{
        db.contacts.save(contact, function(err, contact){
            if(err){
             console.log(err);
         } else {
             res.json({success: true, msg:'Contact successfully added'});
            console.log(contact);
         }
        });
    }
});

module.exports = router;
