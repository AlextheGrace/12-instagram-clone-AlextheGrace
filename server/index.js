/* Dependencies */
var express = require('express');
var app = express();
var cors = require('cors');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
var config = require('./config');
var router = express.Router();
var tokenVerify = require('./middleware/tokenverify');

//db
var db = require('./db.js');
//Controllers

var PhotoController = require('./controllers/PhotoController');
var AuthController = require('./controllers/AuthController');
var UserController = require('./controllers/UserController');

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,");
    res.header("Access-Control-Allow-Headers", "x-access-token");
    next();
  });

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true }));
app.use('/photos', PhotoController);
app.use('/auth', AuthController);
app.use('/users', UserController);
module.exports = app;
