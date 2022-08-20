import React from "react";
import MovieCard from "./MovieCard";
import "./List.css";
import Addmovie from "./Addmovie";
const MovieList = ({moviesListe , setMoviesListe}) => {

  const addNewMovie = (data) => {
    setMoviesListe([...moviesListe, data]);
}

  const card = moviesListe.map((movie, id) => {
    return (
      <div>
        <MovieCard movie={movie} key={id} />
      </div>
    );
});
  return <div className="display">{card}<br/>
  <Addmovie addData={addNewMovie}/>
  </div>;
};
export default MovieList;
