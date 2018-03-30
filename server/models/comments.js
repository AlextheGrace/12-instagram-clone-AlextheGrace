var mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    body: String,
    username: String,
});


let Comment = module.exports  = mongoose.model('Comment', commentSchema);

