import { render } from '@testing-library/react';
import React from 'react';
import { Component } from 'react';

export default class Movie extends Component {
  render() {
    const { movie, handleDeleteMovie } = this.props;
  
    return <div style={{ backgroundColor: movie.color }} onClick={() => handleDeleteMovie && handleDeleteMovie(movie.id)}>
      <div>{movie.title}</div>
      <p>{movie.year}</p>
      <p>{movie.director}</p>
    </div>;
  }
}