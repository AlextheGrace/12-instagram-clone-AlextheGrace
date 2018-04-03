var mongoose = require('mongoose');

let photoSchema = mongoose.Schema({
    createdAt:String,
    description: String,
    imageUrl: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: Array,
    likes: Array
});




let Photo = module.exports  = mongoose.model('Photo', photoSchema);