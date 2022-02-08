import React from 'react';

export default function MovieForm(props) {
  return <div>
    <form className="movie-form" onSubmit={props.submitMovie}>
      <label>
              Title
        <input required value={props.movieTitle} onChange={e => props.setMovieTitle(e.target.value)}/>
      </label>
      <label> Year Released
        <input required value={props.movieFormYearReleased} onChange={e => props.setMovieFormYearReleased(e.target.value)} type="number" min="1920" />
      </label>
      <label> Director
        <input required value={props.movieFormDirector} onChange={e => props.setMovieFormDirector(e.target.value)}/>
      </label>
      <label> Poster Color
        <select required value={props.movieFormColor} onChange={e => props.setMovieFormColor(e.target.value)}>
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
