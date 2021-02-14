import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


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
                genre: '',
        });

        const addNewFilm = event => {
                event.preventDefault();
                console.log("in addNewFilm", newFilm);
                dispatch({ type: 'MAKE_FILM', payload: newFilm });
                setFilm({
                        title: '',
                        poster: '',
                        description: '',
                        genre: '',   //  hmm?
                });
        }

        useEffect(() => {
                dispatch({ type: 'FETCH_GENRES' });
        }, []);

        function nextLink() {
                history.push('/');
        };

        //<form onSubmit={addNewPlant}>
        //         <input type='text' value={newPlant.name} placeholder='Plant Name' onChange={(e) => setPlant({ ...newPlant, name: e.target.value })} />
        //<input type='submit' value='Add New Plant' />


        return (
                <>
                        <h3>Why not add a new movie to our database?</h3>
                        <form onSubmit={addNewFilm}>
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
                                <div className='dropdown'>
                                        <button onClick={() => document.getElementById("myDropdown").classList.toggle("show")} 
                                        className="dropbtn">Select Genre</button>
                                        {reduxStore.genres.map(genres =>
                                        <div id="myDropdown" className="dropdown-content" key={genres.name}>
                                                <a >{genres.name}</a>
                                        </div>
                                        )}
                                </div>

                                <button onClick={nextLink}>Cancel/Back</button>
                                <button type="submit" value='Save New Movie'>Save New Movie</button>
                        </form>
                </>
        )


};

export default AddMovie;
