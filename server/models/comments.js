var mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    body: String,
    usename: String,
});


let Comment = module.exports  = mongoose.model('Comment', commentSchema);

