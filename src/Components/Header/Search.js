import React,{useState} from 'react'
import { Main } from '../Main/Main';
import Rate from '../Rate';
import {InputGroup  } from "react-bootstrap";
import './search.css'
import { Navbar,Button,Nav,Form,FormControl} from "react-bootstrap";
import Add from '../Main/Add/Add';
import { NavLink } from 'react-router-dom';


const Search = ({movies,AddFilm}) => {
    
  const [searchField, setSearchField] = useState("");
  const [searchRate,setSearchRate]=useState(0);

  const filtredMovie = movies.filter(
    movie => 
  (movie.title.toLowerCase().includes(searchField.toLowerCase().trim()) ) &&
  movie.rate>=searchRate 
      );
      


    return (
        <div>
       <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Film</Navbar.Brand>
    <Nav className="mr-auto">
      
      <NavLink to="/">Home</NavLink>
    </Nav>
    <Form inline>
    <FormControl aria-describedby="basic-addon1" placeholder = "Search Movie" 
          onChange = {e=>setSearchField(e.target.value)}    />
          <Rate rating={searchRate} setSearchRate={setSearchRate}/>
    </Form>
    <Add AddFilm={AddFilm}/>
  </Navbar>
  <Main filtredMovie={filtredMovie }  AddFilm={AddFilm}/>
        </div>
    )
}

export default Search
