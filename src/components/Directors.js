import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, i) => {
        return (
          <div key={i}>
            <h3>{d.name}</h3>
            <ul>
              {d.movies.map((m,i) => <li key={i}>{m}</li>)}
            </ul>
          </div>  
        )
      })}
    </div>
  );
}

export default Directors
