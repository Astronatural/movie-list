const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//GET request for all genres
router.get('/', (req, res) => {
  // Add query to get all genres, save for the addMovieForm
  const query = `SELECT * FROM "genres" ORDER BY "name" ASC`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});


module.exports = router;

