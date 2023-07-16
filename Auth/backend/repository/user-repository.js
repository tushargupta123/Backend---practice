const mail = require("../middleware/nodemailer");
const { User } = require("../models/User");
const bcrypt = require('bcrypt');

class UserRepository{
    async create(data){
        try{
            const user = await User.create(data);
            return user;
        }catch(err){
            console.log("error from userRepository");
            throw err;
        }
    }
    async get(data){
        try{
            const user = await User.findOne(data);
            return user;
        }catch(err){
            console.log("error from userRepository");
            throw err;
        }
    }
    async sendOtp(data){
        try{
            const otp = Math.ceil((Math.random())*9000+1000);
            const user = await User.findOne(data);
            if(user){
                mail(data.email,otp);
                await user.updateOne({otp});
                user.save();
                setTimeout(async() => {
                    await user.updateOne({ $unset: { otp: 1 } });
                    user.save();
                }, 600000);
                return "OTP sent successfully";
            }else{
                return "User not found";
            }
        }catch(err){
            console.log("error from userRepository");
            throw err;
        }
    }
    async matchOtp(data){
        try{
            const user = await User.findOne({email : data.email});
            if(user){
                if(user.otp){
                    if(user.otp === Number(data.otp)){
                        return "OTP verified";
                    }else{
                        return "Wrong OTP";
                    }
                }else{
                    return "OTP not found";
                }
            }else{
                return "user not found";
            }
        }catch(err){
            console.log("error from userRepository");
            throw err;
        }
    }
    async updatePassword(data){
        try{
            const user = await User.findOne({email : data.email});
            if(user){
                const SALT = bcrypt.genSaltSync(9);
                const encryptedPassord = bcrypt.hashSync(data.password,SALT);
                await User.findOneAndUpdate({email : data.email},{password:encryptedPassord});
                return "password changed successfully";
            }else{
                return "user not found";
            }
        }catch(err){
            console.log("error from userRepository");
            throw err;
        }
    }
}

module.exports = UserRepository;