import React from "react";
import "./MovieCard.css";
const MovieCard = ({ props }) => {
    return (
        <div className="movie-card-content">
            <img src={props.posterURL} alt="hehe!!" style={{ height: "170px" , width:"330px"}} />
            <br />
            {props.title} <br />
            {props.description} <br />
            {props.rating} <br />
        </div>
    );
};

export default MovieCard;
