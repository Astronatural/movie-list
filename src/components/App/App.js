import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  return (
    <div className="App">
      <Router>
      <header>
        {/* <NavBar /> */}
          <h1><Link to='/'>Here are some Movies!</Link></h1>
        <h2>Click on a poster to learn more about it.</h2>
        <h3><Link to='/addmovie'>Add a movie by clicking here!</Link></h3>
      </header>
      {/* <Router> */}
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>

          {/* Details page */}
          <Route path="/details" >
            <MovieDetails />
          </Route>


          {/* Add Movie page */}
          <Route path="/addmovie" >
            <AddMovie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
