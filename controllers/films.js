//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var filmsRouter = new express.Router();

var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmsRouter.get('/', function(req, res) {
  res.json(films);
});

filmsRouter.get('/:id', function(req, res) {
  res.json({data: films[req.params.id]});
});

module.exports = filmsRouter;