const { User } = require("../models/User");

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
}

module.exports = UserRepository;