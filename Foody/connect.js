const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dreambig",
  database: "foody",
});

db.connect(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});

module.exports = db;