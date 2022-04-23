const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongoose Flights' });
});

module.exports = router;
