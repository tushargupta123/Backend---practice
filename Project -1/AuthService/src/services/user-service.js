const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw {error};
        }
    }

    async signIn(email,plainPassword){
        try{
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(plainPassword,user.password);
            if(!passwordMatch){
                console.log("Password mismatch");
                throw {error: "Incorrect password"};
            }
            const newJwt = this.createToken({email:user.email,id:user.id});
            return newJwt;
        }catch (error) {
            throw {error};
        }
    }

    createToken(user){
        try {
            const result = jwt.sign(user,JWT_KEY,{expiresIn: '1h'});
            return result;
        } catch (error) {
            throw {error};
        }
    }

    verifyToken(token){
        try {
            const result = jwt.verify(token,JWT_KEY);
            return result;
        } catch (error) {
            throw {error};
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword){
        try {
            return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
        } catch (error) {
            throw {error};
        }
    }

    async isAuthenticated(token){
        try {
            const isTokenVerified = this.verifyToken(token);
            if(!isTokenVerified){
                throw {error: "Invalid token"};
            }
            const user = this.userRepository.getById(isTokenVerified.id);
            if(!user){
                throw {error: "User not found"};
            }
            return user.id;
        } catch (error) {
            throw {error};
        }
    }

}

module.exports = UserService;