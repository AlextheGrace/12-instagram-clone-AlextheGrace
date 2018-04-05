/* dependencies */
var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var config = require('./config');
var router = express.Router();
var tokenVerify = require('./middleware/tokenverify');


router.get('/photos', (req, res) => {
    Photo.find({}, (err, photos) => {
     if(err){
         return res.status(500).send("error occured on server");
     }
     else {
         res.status(200).send(photos);
     }   
    }); 
 });
 
 router.get('photos/:photoId', (req, res) => {
     Photo.findById(req.params.photoId, (err, photo) => {
      if(err){
          return res.status(500).send("error occured on server");
      }
      else {
          res.status(200).send(photo);
      }   
     }); 
  });
 