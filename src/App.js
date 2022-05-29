
import React, { useEffect , useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPublicationsThunk } from "./store/base/baseSlice";
import store from "../src/store/index";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import logo from "./assets/logo.svg";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {

  // set state for city search

  const [searchCity, setSearchCity] = useState("") 

  console.log("city is", searchCity)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublicationsThunk());
  }, []);

  const { currentList, loading, error } = useSelector((state) => state.base);

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
};

export default AppWrapper;
