var path = require('path');
var config = require('.././config');

// console.log(config);
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database
});
connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();
/* GET users listing. */
router.get('/', function(req, res, next) {

  var query = "SELECT post as id FROM discover_list WHERE post IS NOT NULL AND removed = False ORDER BY display_Date DESC LIMIT 0, 10";

  connection.query("select * from posts limit 10", function(err, rows, fields) {
    if (err) throw err;
    // console.log('The solution is: ', rows[0]);
    res.json(rows);
  });

  // res.send('respond with a resource');
});

module.exports = router;
