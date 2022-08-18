import React, { useState } from "react";
import { useRef } from "react";



const Addmovie = ({ addData }) => {
    const titleRef = useRef();
    const posterRef = useRef();
    const descRef = useRef();
    const ratingRef = useRef();

    const Addingmovie = (event) => {
        event.preventDefault();
        let movieObject = { title: titleRef.current.value, description: descRef.current.value, posterURL: posterRef.current.value, rating: ratingRef.current.value };
        addData(movieObject)
    };

    return (

        <div>
            <form onSubmit={Addingmovie}>
                poster<input type="text" ref={posterRef} /> <br />
                title:<input type="text" ref={titleRef} /><br />
                description<input type="text" ref={descRef} /><br />
                <input type="text" ref={ratingRef} /><br />
                <button type="submit">add</button>
            </form>
        </div>
    );
};

export default Addmovie;
