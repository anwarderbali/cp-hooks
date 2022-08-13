import React, { useState,useEffect } from "react";
import MovieCard from "./MovieCard";
import "./List.css";
import Addmovie from "./Addmovie";
import {movies} from "./Util";
const MovieList = (props) => {
  const [moviesListe,setMoviesListe]=useState(movies)
  const addMovie=(data)=>{setMoviesListe([...moviesListe,data])}
  
  const card = moviesListe.map((props, id) => {
    return (
      <div>
        <MovieCard props={props} key={id} />
      </div>
    );
  });
  return <div className="display">{card}<br/>
  <Addmovie addData={addMovie}/>
  
  </div>;
};
export default MovieList;
