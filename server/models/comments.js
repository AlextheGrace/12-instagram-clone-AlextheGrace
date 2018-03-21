var mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    userId: String,
    body: String,
    createdAt:String
});


let Comment = module.exports  = mongoose.model('Comment', commentSchema);