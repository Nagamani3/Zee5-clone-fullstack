const { Schema, model } = require('mongoose')

const MovieSchema = new Schema({
  movie_title: {
    type: String,
    required: true,
  },
  movie_language: {
    type: String,
    required: true,
  },
  movie_duration: {
    type: String,
    required: true,
  },
  movie_genre: {
    type: String,
    required: true,
  },
  movieImage: {
    type:[""],
    required: true,
  },
}, { timestamps: true });
module.exports = model("movies", MovieSchema);
