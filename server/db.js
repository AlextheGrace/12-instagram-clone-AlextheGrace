var mongoose = require('mongoose');
mongoose.connect('mongodb://klacium:alexgrace92@ds113849.mlab.com:13849/instamam_db');
console.log("connected to db");
var db  = module.exports =  mongoose.connection;


