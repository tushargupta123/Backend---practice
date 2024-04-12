const db = require("../connect");

// const createDish = (req,res) => {
//     const q = "INSERT INTO dish (`name`, `description`, `price`, `type`,`rating`) VALUES(?,?,?,?,?)";
//     const values = [req.body.name, req.body.description, req.body.price,req.body.type, req.body.rating];
//     db.query(q, values, (err, data) => {
//         if(err) return res.status(500).json(err);
//         return res.status(201).json("Dish created successfully");
//     })
// }

const createDish = async (req,res) => {
    await new Promise((resolve,reject)=>{
        const q = "INSERT INTO dish (`name`, `description`, `price`, `type`,`rating`) VALUES(?,?,?,?,?)";
        const values = [req.body.name, req.body.description, req.body.price,req.body.type, req.body.rating];
    
        db.query(q, values, async(err, result)=>{
            if(err) {
                reject(err);
            }
            else res.status(200).json(result);
        });
    });
}

const getDishes = (req,res) => {
    const q = "SELECT * FROM dish WHERE name REGEXP ? ORDER BY price ASC";
    // const q = "SELECT EXISTS (SELECT 1 FROM dish WHERE name = ?) AS name_exists;";
    const values = [`.*${req.body.regex}.*`];
    // const values = [req.body.name];
    db.query(q,values, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

// const getDishes = async (req,res) => {
//     await new Promise((resolve,reject)=>{
//         const sql = `SELECT EXISTS (SELECT 1 FROM dish WHERE name = ?) AS name_exists;`;
//         const params = [req.body.name];
        
//         db.query(sql, params, async(err, result)=>{
//             if(err) {
//                 reject(err);
//             }
//             else res.status(200).json(result[0].name_exists);
//         });
//     });
// }

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