const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres  //maybe just try maping the whole list to test in movieDetails.
  const query = `SELECT * FROM "genres" ORDER BY "name" ASC`;
  console.log(query);
  pool.query(query)
    .then(result => {
      res.send(result.rows);  // rows?
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;

