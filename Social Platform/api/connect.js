import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"dreambig",
    database:"social"
})

db.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
  });