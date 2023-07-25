import  jwt  from "jsonwebtoken";
import { db } from "../connect.js";

export const getUser = (req,res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id = ?";

    db.query(q,[userId],(err,data) => {
        if(err) return res.status(500).json(err);
        const {password ,...other} = data[0];
        return res.json(other)
    })
}

export const updateUser = (req,res) => {
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json("unauthorized");
    }
    jwt.verify(token,"secret",(err,userInfo) => {
        if(err){
            return res.status(401).json("unauthorized");
        }

        const q = "UPDATE users SET `name` = ?,`city` = ?,`website` = ?,`profilePic` = ?,`coverPic` = ? WHERE id = ?";

        const values = [
            req.body.name,
            req.body.city,
            req.body.website,
            req.body.profilePic,
            req.body.coverPic,
            userInfo.id
        ]
    
        db.query(q,values,(err,data) => {
            if(err){
                return res.status(500).json(err);
            }
            if(data.affectedRows > 0) return res.status(200).json("updated profile");
            return res.status(403).json("you cannot update");
        })
    })
}