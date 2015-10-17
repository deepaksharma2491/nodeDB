var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'frankly-staging.ce1zyhcvu8o4.ap-southeast-1.rds.amazonaws.com',
  user     : 'apiuser',
  password : 'agent47@frankly.me',
  database : 'frankly'
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

// connection.end();
/* GET users listing. */
router.get('/', function(req, res, next) {

  var query = "SELECT post as id
                                FROM discover_list
                                WHERE post IS NOT NULL
                                    AND removed = False
                                ORDER BY display_Date DESC
                                LIMIT 0, 10";

  connection.query(query, function(err, rows, fields) {
    if (err) throw err;
    // console.log('The solution is: ', rows[0]);
    res.json(rows);
  });

  // res.send('respond with a resource');
});

module.exports = router;
