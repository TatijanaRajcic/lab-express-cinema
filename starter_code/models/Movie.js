const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = mongoose.model('movies', new Schema({
  /* "movies" is the name of my collection */
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
}));

// The Movie schema is like a Movie constructor for my DB

// we need to add this line so we can export this model elsewhere in our app
// it's kind of a return statement for my Movie model
module.exports = Movie
