const express = require('express');
const router  = express.Router();
const Movies = require("../models/Movie")

/* GET movie page */
router.get('/movie/:id', (req, res, next)=>{
  Movies.findOne({_id: req.params.id}) 
  .then(movie=>{
    console.log(movie)
    res.render('movie', {movie})
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
