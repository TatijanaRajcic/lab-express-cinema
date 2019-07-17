const express = require('express');
const router  = express.Router();

// we are requiring the Movie model
// requiring the Movie model is like considering all the entries in our DB that use the Movie model
// that is, all the movies => Movies 

const Movies = require("../models/Movie")

/* GET movies page */
router.get("/movies", (req, res, next)=>{
  // Movies.find() is a method that enables us to work on the data
  Movies.find({})
  .then(movies => {
    // movies here is a placeholder for ALL the data we retrieve with the Movies.find() command
    // it's a array of movie objects
    res.render('movies', {movies});
    // {movies} is saying: I want my data to be a variable that I can reuse in my view "index.hbs" (and its partials)
  })
  .catch((error) => {
    console.log(error);
  })
})


module.exports = router;