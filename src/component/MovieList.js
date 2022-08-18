import React from "react";
import MovieCard from "./MovieCard";
import "./List.css";
import Addmovie from "./Addmovie";
import {movies} from "./Util";
const MovieList = ({movies , setMoviesListe}) => {
  
  
  const addMovie = (data) => {
    setMoviesListe([...movies, data]);
  }
  
  const card = movies.map((movie, id) => {
    
    return (
      <div>
        <MovieCard movie={movie} key={id} />
      </div>
    );
  });
  return <div className="display">{card}<br/>
  <Addmovie addData={addMovie}/>
  
  </div>;
};
export default MovieList;
