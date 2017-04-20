const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
// Twilio Credentials
var accountSid = 'AC49f3231ca811745d8c009eb51195520f';
var authToken = '34ce3a4859a3a42d7612a5daa1bd2735';
var client = require('twilio')(accountSid, authToken);

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'Failed to register user'});
        } else {
            res.json({success: true, msg:'User successfully registered'});
            client.messages.create({
            to: '+353857327698',
            from: '+353861802296',
            body: 'Test Message from Twilio',
                }, function (err, message) {
                    console.log(message.sid);
            });
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err,user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week in seconds
                });
                //Return profile data
                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                       id: user._id,
                       name: user.name,
                       username: user.username,
                       //Not returing password for security reasons
                       //Never return the password
                       email: user.email,
                       role: user.role
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong Password'})
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

//Contact
router.get('/contactus',(req, res, next) => {
    
});

module.exports = router;