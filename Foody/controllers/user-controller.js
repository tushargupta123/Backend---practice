const db = require("../connect");

const signup = (req,res) => {
    const q = "INSERT INTO users (`email`, `password`) VALUES (?, ?)";
    const values = [req.body.email, req.body.password];
    db.query(q, values,(err,data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json("User created successfully");
    })
}
const login = (req,res) => {
    const q = "SELECT * FROM users WHERE email = ?";
    const values = [req.body.email];
    db.query(q, values,(err,data) => {
        if(err) return res.status(500).json(err);
        if(data[0].password===req.body.password){
            return res.status(200).json({"userId" : data[0].id});
        }
        return res.status(401).json("Invalid credentials");
    })
}

module.exports = {signup,login}