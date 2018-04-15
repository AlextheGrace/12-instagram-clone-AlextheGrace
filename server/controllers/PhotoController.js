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
var User = require('../models/users');
var Photo = require('../models/photos');
var Comment = require('../models/comments');

/*  configs and settings, setup. */

// dont think this is safe but implementing this so i can use it locally 
router.use((cors()));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded( {extended: false }));


//get all photos
router.get('/', (req, res) => {
    Photo.find({}, (err, photos) => {
     if(err){
         return res.status(500).send("error occured on server");
     }
     else {
         res.status(200).send(photos);
     }  
    }).populate({path:'author', select: ['_id','username','avatar']});
});


//get photo by id
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

//comment photo
router.put('/:photoId/comments/:username', function(req, res) {
    Comment.create({

        body: req.body.body,
        username: req.params.username

    },(err, comment)=> {
        if(err) return res.status(500).send("proper error while commenting");

        Photo.findByIdAndUpdate(req.params.photoId,{ $push: { comments: [comment]}}, { new: true }, (err, photo) => {
            if(err){
                res.status(500).send("error")
            }
            else {
                res.status(200).send(photo);
            }
        });
    })
});


//like photo
router.put("/:photoId/likes/:userId", (req, res) => {
    Photo.findById(req.params.photoId, (err, photo) => {
        var i = photo.likes.indexOf(req.params.userId);

        if(i !== -1 ) {
            Photo.findByIdAndUpdate(
                req.params.photoId,
                {$pull: {likes: req.params.userId }},
                {new: true},
                (err, photo) => {

                    User.findByIdAndUpdate(
                        req.params.userId,
                        { $pull: {likes: req.params.photoId }},
                        {new: true },
                        (err, user) => {
                            res.status(200).send(photo)
                        }
                    )
                }
            );
        }
        else {
            Photo.findByIdAndUpdate(
                req.params.photoId,
                {$push: {likes: [req.params.userId] }},
                {new: true },
                (err, photo) => {
                    if(err) {
                        return res.status(500).send(photo);
                    }
                    else {
                    
                    User.findByIdAndUpdate(
                        req.params.userId,
                        {$push: { likes: req.params.photoId }},
                        {new: true },
                        (err, user) => {
                            res.status(200).send(photo);
                        }
                    )
                    }
                }
            )
        }
    })
});


//Upload photo 


router.post('/upload',(req, res) => {

})
 

module.exports = router;