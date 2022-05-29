import logo from './assets/logo.svg';
import React, { useState } from 'react';
import {
  Outlet,
  Link,
} from "react-router-dom";
import { TextField,
  AppBar,
  Button, } from '@mui/material';
import CitySearchButton from "./components/CitySearchButton";
import './App.css';

// pass city to resultados using state DONE
// pull resultados 
// render cards
// filter resultados by city

function App() {

  // set state for city search

  const [searchCity, setSearchCity] = useState("") 

  console.log("city is", searchCity)


// main render
  return (
    <div className="App">
       <header className="App-header">
       <Link to='/'><img src={logo}/></Link>
          <div>
            <div className='row'>
              <TextField  onChange={event =>setSearchCity(event.target.value)} id="outlined-basic" label="Ciudad" variant="outlined" />
              <Button variant="contained" color="warning"><Link to={{pathname: '/results', search: searchCity,}}>GO!</Link></Button>
            </div>
            <br></br>
            <Button variant="outlined" color="warning"><Link to='/publicar'>Publicar</Link></Button> 
          </div>
          <Outlet />

       </header> 
      </div>
  );
}

export default App;
