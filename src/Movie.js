import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return <div style={{ backgroundColor: movie.color }} onClick={() => handleDeleteMovie && handleDeleteMovie(movie.id)}>
    <div>{movie.title}</div>
    <p>{movie.year}</p>
    <p>{movie.director}</p>
  </div>;
}
