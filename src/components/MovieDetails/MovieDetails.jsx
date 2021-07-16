import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails() {

    const history = useHistory();
    const reduxStore = useSelector(store => store);


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