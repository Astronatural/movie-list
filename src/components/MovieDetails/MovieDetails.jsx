//import { useSelector, useDispatch } from 'react-redux';


function MovieDetails() {
    // the plan here is that we will have two GETs; one to get the movie details(by Id).
    // and another to get the genres (by movie Id).
    
    // const dispatch = useDispatch();
    // const reduxStore = useSelector(store => store);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_DETAILS' });
    // }, []);

    return (
        <>
            <h2>Here are some details on that movie you clicked on.</h2>
            {/* {reduxStore.detailsReducer.map(details =>
                <div key={details.id}>
                    <h1>{details.title}</h1>
                    <img src={details.url} />
                    <p>{details.description}</p>
                    <p>Genre(s): {details.genres} </p>
                    <button onClick={nextLink}>Back to List</button>
                </div>
            )} */}
        </>
    )
};

export default MovieDetails;