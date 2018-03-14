var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');
var Photo = require('./models/photos');


//check if connected to db 
db.once('open', function(){
    console.log("connected to mongodb");
});


//app use settings 
// dont think this is safe but implementing this so i can use it locally 
app.use((cors()));

//test index route get wudup
app.get('/',(req,res) => {
    res.json({
        "wudup":"wudup"
    })
});

app.get('/photos', (req, res) => {
    Photo.find({}),function(err,photos){
        res.render('index', {
            title:"photos",
            photos: photos
        });
    }
});

// var UserController = require('./controllers/UserController');
// var AuthController = require('./controllers/AuthController');

// app.use('/users', UserController);
// app.use('/auth', AuthController);

module.exports = app;