import React from "react";
import "./MovieCard.css";
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card-content">
            <img src={movie.posterURL} alt="hehe!!" style={{ height: "170px" , width:"330px"}} />
            <br />
            {movie.title} <br />
            {movie.description} <br />
            <StarRatingComponent
                name='filter' 
                starCount={10}
                emptyStarColor={String}
                value={movie.rating}
    
/><br />
        </div>
    );
};

export default MovieCard;
