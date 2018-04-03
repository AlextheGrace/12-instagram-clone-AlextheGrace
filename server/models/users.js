var bcrypt = require('bcrypt');
var mongoose = require('mongoose');


let userSchema = mongoose.Schema({
            username: String,
            email: String,
            password: {type: String, minlength:[8,'password must contain atleast 8 characters']},
            photos: [{type: Schema.types.ObjectId, ref: 'Photo'}]
});


userSchema.pre('save', function(next) {
    var user = this;
    var roundsOfSalt = 5;

    if(!user.isModified('password')) return next();


    bcrypt.genSalt(roundsOfSalt,function (error, salt)  {
        if(error) return next(error);
        
        bcrypt.hash(user.password, salt, function (error, hash) {
            if (error) return next(error);

            user.password = hash;
            next();
        });
    });
});

mongoose.model('User', userSchema);
module.exports = mongoose.model('User');