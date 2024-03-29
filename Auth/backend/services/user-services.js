const UserRepository = require("../repository/user-repository");

const userRepository = new UserRepository();

class UserServices {
  async create(data) {
    try {
      const user = await userRepository.create(data);
      const token = user.genJWT();
      return token;
    } catch (err) {
      console.log("error from userService");
      throw err;
    }
  }
  async get(data) {
    try {
      const user = await userRepository.get({email : data.email});
      if(!user){
        throw{
            message: "User not found"
        }
      }
      if(!user.comparePassword(data.password)){
        throw{
            message: 'invalid password'
        }
      }
      const token = user.genJWT();
      return token;
    } catch (err) {
      console.log("error from userService");
      throw err;
    }
  }
  async sendOtp(data) {
    try {
      const resp = await userRepository.sendOtp(data);
      return resp;
    } catch (err) {
      console.log("error from userService");
      throw err;
    }
  }
  async matchOtp(data) {
    try {
      const resp = await userRepository.matchOtp(data);
      return resp;
    } catch (err) {
      console.log("error from userService");
      throw err;
    }
  }
  async updatePassword(data) {
    try {
      const resp = await userRepository.updatePassword(data);
      return resp;
    } catch (err) {
      console.log("error from userService");
      throw err;
    }
  }
}


module.exports = UserServices;