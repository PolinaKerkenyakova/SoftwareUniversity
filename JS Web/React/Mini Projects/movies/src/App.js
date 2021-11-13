import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState(null)

  const fetchMoviesHandler = async () => {
    setError(null)
    try {
      setIsLoadingData(true);
      const response = await fetch('https://swapi.dev/api/films/')

        if (!response.ok) {
          throw new Error('Something went wrong!')
        }
        const result = await response.json();
        setMovies(result.results)
    } catch (error) {
      setError(error.message);
    }

    setIsLoadingData(false);

  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoadingData && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoadingData && movies.length === 0 && !error && <p>Found no movies!</p>}
        {!isLoadingData && error && <p>{error}</p>}
        {isLoadingData && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
