import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, i) => {
          return (
            <div key={i}>
              <h3>{m.title}</h3>
              <h6>Time: {m.time} minutes</h6>
              <ul>
                Genres: 
                {m.genres.map((g, i) => <li key={i}>{g}</li>) }
              </ul>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
