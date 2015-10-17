var express = require('express');
var router = express.Router();
var http = require('http');
/* GET home page. */
router.get('/', function(req, res, next) {
  http.get('https://snortfootball.wordpress.com/feed/', function(res) {
    // save the data
    console.log(res,"this res");
    var xml = '';
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('end', function() {
      // parse xml
    });

    // or you can pipe the data to a parser
    res.pipe(dest);
  });


  res.render('layout');
});

module.exports = router;
