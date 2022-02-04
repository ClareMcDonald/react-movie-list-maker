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
      const filteredMovies = allMovies.filter(movie => movie.name.includes(search));

      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(allMovies);
    }
  }

  return (
    <div className="App">
      <Movie movie={{
        title: movieTitle,
        director: movieFormDirector,
        year: movieFormYearReleased,
        color: movieFormColor
      }} />
      <div className="filter-movies">
        Filter Movies
        <input onChange={(e) => handleFilterMovies(e.target.value)} />
      </div>
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
      <MovieList allMovies={allMovies} handleDeleteMovie={handleDeleteMovie}/>
    </div>
  );
}

export default App;
