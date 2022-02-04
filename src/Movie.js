import React from 'react';

export default function Movie({ movie }) {
  return <div>
    <div>{movie.title}</div>
    <p>{movie.year}</p>
    <p>{movie.director}</p>
  </div>;
}
