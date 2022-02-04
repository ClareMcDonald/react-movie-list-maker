import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import Movie from './Movie';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState();
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('Green');

  function submitMovie(e) {
    e.preventDefault();
    
    const newMovie = {
      id: Math.ceil(Math.random() * 999999),
      title: movieTitle,
      director: movieFormDirector,
      year: movieFormYearReleased,
      color: movieFormColor
    };
  
    setAllMovies([...allMovies, newMovie]);
  
    setMovieTitle('');
    setMovieFormDirector('');
    setMovieFormYearReleased();
    setMovieFormColor();
  }

  function handleDeleteMovie(id) {
    const index = allMovies.findIndex(movie => movie.id === id);

    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    if (search) {
      const filteredMovies = allMovies.filter(movie => movie.title.includes(search));

      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(allMovies);
    }
  }

  return (
    <div className="App">

      <div className="current-movie">
        <h3>Add a Movie</h3>
        <Movie movie={{
          title: movieTitle,
          director: movieFormDirector,
          year: movieFormYearReleased,
          color: movieFormColor
        }} />
      </div>
      <div className="movie-form">
        <MovieForm
          submitMovie={submitMovie}
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
          movieFormYearReleased={movieFormYearReleased}
          setMovieFormYearReleased={setMovieFormYearReleased}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor}
        />
      </div>
      <div className="filter-movies">
        <h3>Filter Movies</h3>
        <input onChange={(e) => handleFilterMovies(e.target.value)} />
      </div>
      <div className="movie-list">
        <h3>Movies</h3>
        <MovieList
          allMovies={filteredMovies.length
            ? filteredMovies
            : allMovies
          }
          handleDeleteMovie={handleDeleteMovie} />
      </div>
    </div>
  );
}

export default App;
