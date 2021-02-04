import React from 'react'
import './App.css';
import {useState} from'react';
import { film} from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './Components/Main/Main';
import Search from './Components/Header/Search';

function App() {
  
  const [movies, setMovies] = useState(film);
  const AddFilm=(x)=>{
    setMovies([...movies,x])
  }

  
     
 
  return (
    <div className="App">
   
      <Search movies={movies} AddFilm={AddFilm} />
      
    </div>
  );
}

export default App;
