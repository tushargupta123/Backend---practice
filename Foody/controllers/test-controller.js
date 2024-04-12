const db = require("../connect");

const createTest = (req,res) => {
    const q = "INSERT INTO test (`name`, `event`) VALUES(?,?)";
    const values = [req.body.name, new Date()];
    db.query(q, values, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json("test created successfully");
    })
}

const getTest = (req,res) => {
    const q = "SELECT COUNT(*) FROM test WHERE YEAR(event) = ? AND MONTH(event) = ? AND DAY(event) = ?" ;
    const params = [req.body.year, req.body.month,req.body.day];
    db.query(q, params,(err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json(data);
    })
}

module.exports = {createTest,getTest}