import React from "react";
import "./MovieCard.css";
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({ movie }) => {
    return (

        <div className="movie_card" id="bright">
            <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={movie.posterURL} />
                    <h1>{movie.title} </h1>
                    <StarRatingComponent
                        name='filter'
                        starCount={10}
                        emptyStarColor={String}
                        value={movie.rating}
                    /><br />
                </div>
                <div className="movie_desc">
                    <h1 className="text">
                        {movie.description}
                    </h1>
                </div>

            </div>
        </div>

    );
};

export default MovieCard;
