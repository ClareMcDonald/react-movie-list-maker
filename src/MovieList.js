import React from 'react';
import Movie from './Movie';
import { render } from '@testing-library/react';

export default class MovieList Component {
  render() {
    const { handleDeleteMovie } = this.props;
  
    return <div>
    {props.allMovies.map((movie, i) => <Movie key={`${movie}-${i}`} movie={movie} handleDeleteMovie={props.handleDeleteMovie} />)}
  </div>;
  }
}