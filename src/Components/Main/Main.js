import React from 'react'
import { MovieCard } from './MoviesCard/MovieCard'
import './main.css';
import Add from './Add/Add';


export const Main = ({filtredMovie,AddFilm}) => {
    return (
        
        <div className='moviesCard'>
             {filtredMovie.map(movie=>
            <MovieCard movie={movie}/>
             ) }
             
             
           </div>
        
    )
}
