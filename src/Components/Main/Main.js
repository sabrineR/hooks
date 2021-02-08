import React from 'react'
import { MovieCard } from './MoviesCard/MovieCard'
import './main.css';
import Add from './Add/Add';
import { Link } from 'react-router-dom';
import Film from '../Film/Film';
import { film } from '../../data';

import { Route, Switch } from 'react-router-dom';
export const Main = ({filtredMovie,AddFilm}) => {
    return (
        
        <div className='moviesCard'>
             {filtredMovie.map((movie)=>
             <div key={movie.id}>
             
             <Link to={`/movie/${movie.title}`}>
                {/* {movie.title} */}
               
            <MovieCard movie={movie}/>
            </Link></div>
             ) }
             
             

            
             
           </div>
        
    )
}
