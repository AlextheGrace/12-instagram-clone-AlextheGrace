var express = require('express');
var app = express();
// var db = require('./db.js');


app.get('/',(req,res) => {
    res.json({
        "wudup":"wudup"
    })
})

// var UserController = require('./controllers/UserController');
// var AuthController = require('./controllers/AuthController');

// app.use('/users', UserController);
// app.use('/auth', AuthController);

module.exports = app;