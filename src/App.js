import logo from './assets/logo.svg';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Outlet,
  Route,
  Router,
  Link,
} from "react-router-dom";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
       <Link to='/'><img src={logo}/></Link>
          <div>
            <Button variant="contained" color="warning"><Link to='/resultados'>GO!</Link></Button>
             <br></br>
            <Button variant="outlined" color="warning"><Link to='/publicar'>Publicar</Link></Button> 
          </div>
          <Outlet />

       </header> 
      </div>
  );
}

export default App;
