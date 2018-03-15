var mongoose = require('mongoose');

let userSchema = mongoose.Schema({
            username: String,
            email: String,
            password: {String}
});




let User = module.exports  = mongoose.model('User', userSchema);