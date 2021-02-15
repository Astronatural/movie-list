import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddMovie.css';


function AddMovie() {

        // inputs for title, poster and description; drop-down menu for FULL genre list.
        // both buttons will end up sending the user back to '/'
        const dispatch = useDispatch();
        const history = useHistory();
        const reduxStore = useSelector(store => store);


        let [newFilm, setFilm] = useState({
                title: '',
                poster: '',
                description: '',
                genre_id: '',
        });


        const addNewFilm = event => {
                event.preventDefault();
                console.log("in addNewFilm", newFilm);
                dispatch({ type: 'MAKE_FILM', payload: newFilm });
                setFilm({
                        title: '',
                        poster: '',
                        description: '',
                        genre_id: '',   //  doesn't do nothing
                });
                history.push('/');
        }

        useEffect(() => {
                dispatch({ type: 'FETCH_GENRES' });
        }, []);

        function nextLink() {
                history.push('/');
        };


        return (
                <>
                        <h3>Why not add a new movie to our database?</h3>
                        <form onSubmit={addNewFilm} >
                                <input
                                        value={newFilm.title}
                                        onChange={(e) => setFilm({ ...newFilm, title: e.target.value })}
                                        type="text"
                                        id="title"
                                        placeholder="Add Title" />
                                <input
                                        value={newFilm.poster}
                                        onChange={(e) => setFilm({ ...newFilm, poster: e.target.value })}
                                        type="text"
                                        id="poster"
                                        placeholder="Poster Image URL" />

                                <label for="addDesc">Movie Description</label>
                                <textarea
                                        id="addDesc"
                                        name="addDesc"
                                        rows="8" cols="64"
                                        value={newFilm.description}
                                        onChange={(e) => setFilm({ ...newFilm, description: e.target.value })}>
                                        Add a description of the movie you want to add.
                                        </textarea>
                                <label for="genres">Choose a genre:</label>
                                <select value={newFilm.genre_id} name="genres" onChange={(e) => setFilm({ ...newFilm, genre_id: e.target.value })}>
                                        {reduxStore.genres.map(genres => 
                                        <option  value={genres.id} key={genres.id} 
                                        >{genres.name}</option>
                                        )} 
                                </select>

                                <button type="submit" value='submit'>Save New Movie</button>
                        </form>
                        <button onClick={nextLink}>Cancel/Back</button>
                </>
        )
};

export default AddMovie;

