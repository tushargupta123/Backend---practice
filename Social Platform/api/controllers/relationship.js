import jwt from "jsonwebtoken";
import { db } from "../connect.js";

export const getRelationships = (req, res) => {
  const q =
    "SELECT followerUserId FROM relationships WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data.map(rel => rel.followedUserId));
  });
};

export const addRelationship = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token){
        return res.status(401).json("unauthorized");
    }
    jwt.verify(token,"secret",(err,userInfo) => {
        if(err){
            return res.status(401).json("unauthorized");
        }

        const q = "INSERT INTO relationships (`followerUserId`,`followedUserId`) VALUES (?)";

        const values = [
            userInfo.id,
            req.body.userId
        ]
    
        db.query(q,values,(err,data) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json("following");
        })
    })
};

export const deleteRelationship = (req, res) => {
  const q =
    "DELETE FROM likes WHERE `followerUserId`= ? AND followedUserId = ?";

  db.query(q, [userInfo.id,req.query.userId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json("unfollow");
  });
};
