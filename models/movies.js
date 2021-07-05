const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieName: String,
  desc: String,
  movieImg: String,
  note: Number,
  vote: Number,
});

const movieModel = mongoose.model('movies', movieSchema);

module.exports = movieModel;
