const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// add Query? to get genres from selected movie.
router.get(`/:id`, (req, res) => {
    console.log(req.params.id);
    const movieId = req.params.id
    const query = `SELECT "genres"."name" FROM "movies"
LEFT JOIN "movies_genres" on "movies"."id"="movies_genres"."movie_id"
LEFT JOIN "genres" ON "movies_genres"."genre_id"="genres"."id"
WHERE "movies"."id"=$1;`;
    console.log('in detail router', movieId);
    pool.query(query, [movieId])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get detail genres', err);
            res.sendStatus(500)
        })
});

module.exports = router;