var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bowery Valuation' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Our Team - Bowery Valuation' });
});

router.get('/clients', function(req, res, next) {
  res.render('client', { title: 'Client Resources - Bowery Valuation' });
});

router.get('/partnership', function(req, res, next) {
  res.render('partnership', { title: 'Cushman & Wakefield Parnters with Bowery Valuation' });
});

var nodemailer = require('nodemailer');

// router.post('/contact', function (req, res) {
// });

module.exports = router;
