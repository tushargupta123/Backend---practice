import { db } from "../connect.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

export const register = (req,res) => {

    // Check if user already exists

    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q,[req.body.username],(err,data) => {
        if(err) {
            return res.status(500).json(err);
        }
        if(data.length){
            return res.status(409).json("user already exists");
        }

        // Create a new user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password,salt);

        const q = "INSERT INTO users(`username`, `email`, `password`, `name`) VALUE (?,?,?,?)";

        db.query(q,[req.body.username,req.body.email,hashedPassword,req.body.name],(err,data) => {
            if(err) {
                return res.status(500).json(err);
            }
            return res.status(200).json("user has been created");
        })
    })
}

export const login = (req,res) => {

    const q = "SELECT * FROM users WHERE username = ?";
    db.query(q,[req.body.username],(err,data) => {
        if(err) {
            return res.status(500).json(err);
        }
        if(!data.length){
            return res.status(404).json("user does not exists");
        }
        const checkPassword = bcrypt.compareSync(req.body.password,data[0].password);
        if(!checkPassword){
            return res.status(400).json("Wrong credentials");
        }
        const token = jwt.sign({id:data[0].id},"secret");
        const {password,...other} = data[0];
        res.cookie("accessToken",token,{
            httpOnly: true,
        }).status(200).json(other);
    })
    
}
export const logout = (req,res) => {
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("user logged out");
}