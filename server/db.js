var mongoose = require('mongoose');
mongoose.connect('mongodb://klacium:alexgrace92@ds113849.mlab.com:13849/instamam_db');
var db  = module.exports =  mongoose.connection;


