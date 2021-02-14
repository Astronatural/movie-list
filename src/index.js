import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('GENRES_DETAIL', fetchDetailGenres);
}


function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get movies:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }   
}


function* fetchDetails(action) {
    // get details from the DB --> don't forget the reducer.  I don't know that i can use this anymore.
    try {
        console.log('get details:', action.payload);
        yield put({ type: 'SET_DETAILS', payload: action.payload });

    } catch {
        console.log('get all error');
    }
}

function* fetchDetailGenres(action) {
    // get denre details from the DB.  Why is it going to the catch?
    console.log(`FDG`, action.payload);
    try {
        const genDets = yield axios.get(`'/api/detail/${action.payload}`)
        console.log(req.params['id']);
        console.log('detail genres:', genDets);  
        yield put({ type: 'GET_DETAILS', payload: action.payload }); // response.data || action.payload
    } catch {
        console.log('get all error');
    }
}

function* fetchAllGenres() {
    // get all genres from the DB
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get genres:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


// used to store movies+genres=totaldetails.  This is the same as movies now.  
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}


// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
