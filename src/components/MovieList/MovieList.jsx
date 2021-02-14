import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';
import './MovieList.css';


function MovieList() {

    // TODO wrap that image in a link to the movie details page.
    // it should also grab that related ID so we can GET the details from the DB.

    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function nextLink (e) {
         e.preventDefault();
         let movieId = e.target.movie.id
         dispatch({ type:'FETCH-DETAILS', payload: movieId});
         console.log(movieId);
        console.log('link clicked');
        history.push('/details');
    };

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <button onClick={nextLink}> <img src={movie.poster} alt={movie.title} /></button>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;