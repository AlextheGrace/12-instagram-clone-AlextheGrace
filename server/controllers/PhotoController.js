/* dependencies */
var express = require('express');
var app = express();
var cors = require('cors');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

var router = express.Router();
// var tokenVerify = require('./middleware/tokenverify');


//models
var Photo = require('../models/photos');

/*  configs and settings, setup. */

// dont think this is safe but implementing this so i can use it locally 
router.use((cors()));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));



router.get('/', (req, res) => {
    Photo.find({}, (err, photos) => {
     if(err){
         return res.status(500).send("error occured on server");
     }
     else {
         res.status(200).send(photos);
     }   
    }); 
 });
 
 router.get('/:photoId', (req, res) => {
     Photo.findById(req.params.photoId, (err, photo) => {
      if(err){
          return res.status(500).send("error occured on server");
      }
      else {
          res.status(200).send(photo);
      }   
     }); 
  });
 

module.exports = router;