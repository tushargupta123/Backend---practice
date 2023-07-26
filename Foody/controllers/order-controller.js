const db = require("../connect");

const createOrder = (req,res) => {
    const q = "INSERT INTO orders (`userId`, `dishId`) VALUES (?, ?)";
    const values = [req.body.userId, req.body.dishId];
    db.query(q, values,(err,data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json("Order created successfully");
    })
}

const getOrder = (req,res) => {
    let q = "SELECT o.*,u.id AS userId,email,d.id AS dishId,d.* FROM orders AS o JOIN users AS u ON (u.id = o.userId) JOIN dish AS d ON (d.id = o.dishId) WHERE userId = ?";
    const values = [req.body.userId];

    if (req.body.status) {
        q += " AND status = ?";
        values.push(req.body.status);
    }
    db.query(q, values,(err,data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json(data);
    })
}

module.exports = {createOrder,getOrder}