import React,{useState} from "react";
import { useRef } from "react";
import MovieList from "./MovieList";
import { addToMovies } from "./Util";
const Addmovie = ({addData}) => {
    const titleRef = useRef();
    const posterRef = useRef();
    const descRef = useRef();
    const ratingRef = useRef();

    const Addingmovie = () => {
        let movieObject = {title: titleRef.current.value,description: descRef.current.value,posterURL: posterRef.current.value,rating: ratingRef,};
        console.log(movieObject);
       addData(movieObject) 

    };
    
    return (
        
        <div>
            <form >
                poster<input type="text" ref={posterRef} /> <br/>
                title:<input type="text" ref={titleRef} /><br/>
                description<input type="text" ref={descRef} /><br/>
                <input type="text" ref={ratingRef} /><br/>


                <button onClick={Addingmovie}>add</button>
            </form>
        </div>
    );
};

export default Addmovie;
