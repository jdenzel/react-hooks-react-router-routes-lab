import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {
    movies.map((movie, index) => {
      return <div key={index}>
      <h2>Title: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h3>Genres:</h3>
      <ul>
        {
        movie.genres.map((show, showIndex) => {
          return <li key={showIndex}>{show}</li>
        })
      }
      </ul>
      </div>
    })
    }
    </div>;
}

export default Movies;
