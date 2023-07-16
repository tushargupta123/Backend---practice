const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
    }
})

userSchema.pre('save', function(next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassord = bcrypt.hashSync(user.password,SALT);
    user.password = encryptedPassord;
    next();
});

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.genJWT = function() {
    return jwt.sign({id:this._id,email:this.email},'auth_secret',{
        expiresIn: '1h'
    })
}

exports.User = mongoose.model('User',userSchema);