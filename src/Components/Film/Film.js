import React , {useState,useEffect}from 'react'
import ReactPlayer from "react-player";
import './film.css'
const Film = ({movies,match}) => {
    console.log (match)
   const [movie, setMovie] = useState({});

useEffect(() => {
    setMovie(movies.find((movie)=>movie.title==match.params.name));

}, []);
console.log(movie);

    return (
        <div>
             <div className="player">
             <ReactPlayer url={movie.url}/>
             </div>
     
      <div className="description">
           <h1>{movie.title}</h1>
           <p>{movie.description}</p>
           </div>
        </div>
    )
}

export default Film
