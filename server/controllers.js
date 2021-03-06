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


//models
var User = require('./models/users');
var Photo = require('./models/photos');
var Comment = require('./models/comments');


 

/*  configs and settings, setup. */

// dont think this is safe but implementing this so i can use it locally 
app.use((cors()));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false }));



//check if connected to db 
db.once('open', function(){
    console.log("connected to mongodb");
});




//test index route get wudup
app.get('/', (req,res) => {
    res.json({
        "REST_API_INSTAMAM":"Index Welcome"
    });
});




// photo routes put this into a controller later
app.get('/photos', (req, res) => {
   Photo.find({}, (err, photos) => {
    if(err){
        return res.status(500).send("error occured on server");
    }
    else {
        res.status(200).send(photos);
    }   
   }).populate({path:'author', select: ['_id','username','avatar']})
});

app.get('/photos/:photoid', (req, res) => {
    Photo.findById(req.params.photoid, (err, photo) => {
     if(err){
         return res.status(500).send("error occured on server"+ err);
     }
     else {
         res.status(200).send(photo);
     }   
    }); 
 });

//likes in progress

app.put('photos/:photoId/likes/:userId', function(req, res) {
    Photo.findByIdAndUpdate(req.params.photoId),{$push: { likes: [req.params.userId]}},(err,photo) => {
        if(err){
            res.status(500).send("err");
        }
        else {
            res.status(200).send("like sucess");
        }
    }
});  

//comments

app.put('/photos/:photoId/comments/:username', function(req, res) {
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



 /*########################################################################*/

/* make this auth controller */
app.post('/register',function(req,res) {

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
     }, (error, user) => {
     if(error){
         return res.status(500).send("error occured on server" + error);
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
 app.get('/users/:username', function(req, res){
     User.findOne( {username: req.params.username }, (err, user) => {
        if(err) return res.status(500).send("error occured while logging in");

        if(!user) return res.status(404).send('no user exists');


        return res.status(200).send({
            user:user,
            message:"user found"
        });
     }).populate({path:'photos', select: ['_id','imageUrl','description','createdAt']});
 });

 app.post('/login', function(req,res) {
     User.findOne( { email: req.body.email }, (error, user) => {
         if(error) return res.status(500).send("error occured while logging in");

         if(!user) return res.status(404).send('no user exists registered');

        //compare password in db to requested password
         var validPassword = bcrypt.compareSync(req.body.password, user.password);

         if (!validPassword) return res.status(401).send({
             auth: false,
             token: null
         });

         var token = jwt.sign( {id: user._id },config.secret, {
             expiresIn: 86400 // valid for 24 hours
         });

            return res.status(200).send({
                auth: true,
                token: token,
                user:user
            });
     }).populate({path:'photos', select: ['_id','imageUrl','description']})
 });



// var UserController = require('./controllers/UserController');
// var AuthController = require('./controllers/AuthController');

// app.use('/users', UserController);
// app.use('/auth', AuthController);

module.exports = app;