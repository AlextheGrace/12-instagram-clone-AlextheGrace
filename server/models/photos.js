var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let photoSchema = mongoose.Schema({
    createdAt:String,
    description: String,
    imageUrl: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: Array,
    likes: Array
});




let Photo = module.exports  = mongoose.model('Photo',photoSchema);