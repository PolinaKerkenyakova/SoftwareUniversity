import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const fetchMoviesHandler = () => {
    setIsLoadingData(true);
    fetch('https://swapi.dev/api/films/')
      .then(body => body.json())
      .then(result => {
        setMovies(result.results)
        setIsLoadingData(false);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoadingData && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoadingData && movies.length === 0 && <p>Found no movies!</p>}
        {isLoadingData && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
