/* dependencies */
var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');
var Photo = require('./models/photos');



/*  configs and settings, setup. */

// dont think this is safe but implementing this so i can use it locally 
app.use((cors()));
//check if connected to db 
db.once('open', function(){
    console.log("connected to mongodb");
});




//test index route get wudup
app.get('/', (req,res) => {
    res.json({
        "wudup":"wudup"
    });
});

app.get('/photos', (req, res) => {
   Photo.find({}, (err, photos) => {
    if(err){
        return res.status(500).send("error occured on server");
    }
    else {
        res.status(200).send(photos);
    }   
   }); 
});

app.get('/photos:id', (req, res) => {
    Photo.findById(req.params.id, (err, photo) => {
     if(err){
         return res.status(500).send("error occured on server");
     }
     else {
         res.status(200).send(photo);
     }   
    }); 
 });

app.get('/users', (req,res) => {
    res.json({
        "user":"dwdw"
    });
});


// var UserController = require('./controllers/UserController');
// var AuthController = require('./controllers/AuthController');

// app.use('/users', UserController);
// app.use('/auth', AuthController);

module.exports = app;