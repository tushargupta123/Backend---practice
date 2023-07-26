const db = require("../connect");

const createDish = (req,res) => {
    const q = "INSERT INTO dish (`name`, `description`, `price`, `type`,`rating`) VALUES(?,?,?,?,?)";
    const values = [req.body.name, req.body.description, req.body.price,req.body.type, req.body.rating];
    db.query(q, values, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json("Dish created successfully");
    })
}

const getDishes = (req,res) => {
    const q = "SELECT * FROM dish ORDER BY price ASC";
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json(data);
    })
}

const getDisheById = (req,res) => {
    const q = "SELECT * FROM dish WHERE id = ?";
    db.query(q,[req.params.id] ,(err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json(data);
    })
}

const deleteDish = (req,res) => {
    const q = "DELETE FROM dish WHERE id = ?";
    db.query(q,[req.params.id] ,(err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json("Dish deleted!");
    })
}

const updateDish = (req,res) => {
    const q = "UPDATE dish SET `name` = ?,`description` = ?,`price` = ?,`type` = ?,`rating` = ? WHERE id = ?";
    const values = [req.body.name, req.body.description, req.body.price,req.body.type, req.body.rating,req.params.id];
    db.query(q,values ,(err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(201).json("Dish updated!");
    })
}

module.exports = {createDish,getDishes,deleteDish,updateDish,getDisheById}