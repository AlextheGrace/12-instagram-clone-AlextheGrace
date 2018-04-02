var mongoose = require('mongoose');

let photoSchema = mongoose.Schema({
    createdAt:String,
    name: String,
    imageUrl: String,
    comments: Array,
    likes: Array
});




let Photo = module.exports  = mongoose.model('Photo', photoSchema);