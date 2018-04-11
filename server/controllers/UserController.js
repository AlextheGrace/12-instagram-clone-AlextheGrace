var express = require('express');
var app = express();
var cors = require('cors');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');


//router
var router = express.Router();



//models
var User = require('../models/users');


// dont think this is safe but implementing this so i can use it locally 
router.use((cors()));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));


router.get('/:username', function(req, res){
    User.findOne( {username: req.params.username }, (err, user) => {
       if(err) return res.status(500).send("error occured while logging in");

       if(!user) return res.status(404).send('no user exists');


       return res.status(200).send({
           user:user,
           message:"user found"
       });
    }).populate({path:'photos', populate:{path: "photos"} })
});







module.exports = router;