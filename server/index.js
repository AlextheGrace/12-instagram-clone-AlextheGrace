var express = require('express');
var app = express();
var cors = require('cors');
// var db = require('./db.js');

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
    res.json(
        [
            {
            id: "1",
            createdAt: 1520863911,
            name: "name 1",
            imageUrl: "imageUrl 1"
            },
            {
            id: "2",
            createdAt: 1520863922,
            name: "name 2",
            imageUrl: "imageUrl 2"
            }
        ]
    );
});

// var UserController = require('./controllers/UserController');
// var AuthController = require('./controllers/AuthController');

// app.use('/users', UserController);
// app.use('/auth', AuthController);

module.exports = app;