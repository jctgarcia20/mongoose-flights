const Flight = require('../models/flight');

module.exports = {
  new: newFlights,
  create
};

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new');
  });
}

function newFlights(req, res) {
  res.render('/flights/new');
}