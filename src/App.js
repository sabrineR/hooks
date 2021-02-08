import React from 'react'
import './App.css';
import {useState} from'react';
import { film} from './data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './Components/Main/Main';
import Search from './Components/Header/Search';
import { Route, Switch } from 'react-router-dom';
import Film from './Components/Film/Film';

function App() {
  
  const [movies, setMovies] = useState(film);
  const AddFilm=(x)=>{
    setMovies([...movies,x])
  }

  
     
 
  return (
    <div className="App">
    {/* <Search movies={movies} AddFilm={AddFilm} /> */}
      
   <Switch>
      <Route exact path="/" render={()=>
      <Search movies={movies} AddFilm={AddFilm} />}/>
    

      <Route exact path="/movie/:name" render={(defaultProps)=>
      (<Film {...defaultProps} movies={film}  />
      )} 
      />
    </Switch>
     
    </div>
  );
}

export default App;
