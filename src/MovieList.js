import React from 'react';
import Movie from './Movie';

export default function MovieList(props) {
  return <div>
    {props.allMovies.map((movie, i) => <Movie key={`${movie}-${i}`} movie={movie}/>)}
  </div>;
}
