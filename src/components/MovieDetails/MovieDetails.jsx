import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails() {
    // the plan here is that we will have two GETs; one to get the movie details(by Id).
    // and another to get the genreDetails (by movie Id).

    const history = useHistory();
    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_GENRES' });
    // }, []);

    function nextLink(e) {
        history.push('/');
    };

    return (
        <>
            <h2>Here are some details on that movie you clicked on.</h2>
                <div>
                    <h1>{reduxStore.details.title}</h1>
                    <img src={reduxStore.details.poster} />
                    <p>{reduxStore.details.description}</p>
                   {reduxStore.genreDetails.map(genreDetails =>
                       <div key={genreDetails.name}>
                   <p>{genreDetails.name}</p>
                   </div>
                   )}
                    <button onClick={nextLink}>Back to List</button>
                </div>
        </>
    )
};

export default MovieDetails;