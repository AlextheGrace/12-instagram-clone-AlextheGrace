//dependencies
var express = require('express');
var app = express();
var config = require('../config');
var cors = require('cors');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');


//router
var router = express.Router();



//models
var User = require('../models/users');


// dont think this is safe but implementing this so i can use it locally 

router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));



 router.post('/login', function(req,res) {
    User.findOne( { email: req.body.email }, (error, user) => {

        //error handling if error loggin occured or 404 no user exists
        if(error) return res.status(500).send({errorMessage: "error occured while logging in"});
        if(!user) return res.status(404).send({errorMessage:'no user exists registered'});

       //compare password in db to requested password
        var validPassword = bcrypt.compareSync(req.body.password, user.password);

        if (!validPassword) return res.status(401).send({
            auth: false,
            token: null,
            errorMessage: "invalid password"
            
        });

        var token = jwt.sign( {id: user._id, username: user.username },config.secret, {
            expiresIn: 86400 // valid for 24 hours
        });

           return res.status(200).send({
               auth: true,
               token: token,
               user:user
           });
    });
});


router.post('/register',function(req,res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
     }, (error, user) => {
     if(error){
         return res.status(500).send({errorhandler: "error while loggging in"});
     }
     else {
         //create jwt token
         var token = jwt.sign({ id: user._id },config.secret, {
             expiresIn: 86400 //valid in 24h
         });
         res.status(200).send({
             token:token,
              auth:true,
              user:user
         });
     }   
    }); 
 });


module.exports = router;