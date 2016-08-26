var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bowery Real Estate Systems' });
});

var nodemailer = require('nodemailer');

// router.post('/contact', function (req, res) {
// });

module.exports = router;
