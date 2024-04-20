var express = require("express");
const mysql = require("mysql2");

var router = express.Router();
var dbConn = require("../db-conn.json");

let connection = mysql.createConnection(dbConn);

connection.connect(function (err) {
  if (err) {
    return console.error("Database Connection Error: " + err.message);
  }
  //console.log("Database Connection is Successful.");
});

router.get("/", function (req, res, next) {
  const user_query = "SELECT * FROM photo WHERE category='landscape'";
  connection.query(user_query, function (error, result, fields) {
    if (error) throw error;
    res.render("index", { title: "Landscape Only", photos: result });
  });
});

module.exports = router;
