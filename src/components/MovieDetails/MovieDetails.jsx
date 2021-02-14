import { useSelector, useDispatch } from 'react-redux';


function MovieDetails() {
    // the plan here is that we will have two GETs; one to get the movie details(by Id).
    // and another to get the genres (by movie Id).
    
    const dispatch = useDispatch();
    const reduxStore = useSelector(store => store);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    return (
        <>
            <h2>Here are some details on that movie you clicked on.</h2>
            {/* {reduxStore.details.map(details =>
                <div key={details.id}>
                    <h1>{details.title}</h1>
                    <img src={details.url} />
                    <p>{details.description}</p>
                   {reduxStore.genres.map(details =>
                   <p>genres.name</p>
                   )}
                    <button onClick={nextLink}>Cancel</button>
                    <button onClick={submit}>Save Movie</button>
                </div>
            )} */}
        </>
    )
};

export default MovieDetails;