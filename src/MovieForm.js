import React from 'react';
import { Component } from 'react';

export default class MovieForm extends Component {
  render() {
    const { submitMovie, movieTitle, setMovieTitle, movieFormYearReleased, setMovieFormYearReleased, movieFormDirector, setMovieFormDirector, movieFormColor, setMovieFormColor } = this.props;
    return <div>
      <form className="movie-form" onSubmit={submitMovie}>
        <label>
          Title
          <input required value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
        </label>
        <label> Year Released
          <input required value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)} type="number" min="1920" />
        </label>
        <label> Director
          <input required value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)} />
        </label>
        <label> Poster Color
          <select required value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)}>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>;
  }
}