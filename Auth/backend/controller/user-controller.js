const UserServices = require("../services/user-services");

const userService = new UserServices();

exports.create = async(req,res) => {
    console.log(req.body)
    try{
        const response = await userService.create(req.body);
        res.status(201).json(response);
    }catch(err){
        res.status(500).json(err);
    }
}
exports.get = async(req,res) => {
    try{
        const response = await userService.get(req.body);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err);
    }
}
exports.sendOtp = async(req,res) => {
    try{
        const response = await userService.sendOtp(req.body);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err);
    }
}
exports.matchOtp = async(req,res) => {
    try{
        const response = await userService.matchOtp(req.body);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err);
    }
}
exports.updatePassword = async(req,res) => {
    try{
        const response = await userService.updatePassword(req.body);
        res.status(200).json(response);
    }catch(err){
        res.status(500).json(err);
    }
}

