var express = require('express');
var router = express.Router();
var request = require('sync-request');
const movieModel = require('../models/movies');

const apiKey = 'd5edae92985c7097bf37d9cbc0fd43c6';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new-movies', async (req, res) => {
  var result = await request('GET', `https://api.themoviedb.org/3/movie/popular?api_key=d5edae92985c7097bf37d9cbc0fd43c6&language=en-US&page=1`);
  var resultJSON = await JSON.parse(result.body);
  res.json(resultJSON);
});

router.post('/wishlist-movie', async (req, res) => {
  const newMovie = await new movieModel({
    movieName: req.body.movieName,
    movieImg: req.body.movieImg
  });
  const savedMovie = await newMovie.save();
  res.json({name: req.body.movieName});
});

router.delete('/wishlist-movie/:name', async (req, res) => {
  await movieModel.deleteOne({movieName: req.params.name});
  res.json({movieName: req.params.name});
});

router.get('/wishlist-movie', async (req, res) => {
  const movies = await movieModel.find();
  res.json(movies);
})

module.exports = router;
