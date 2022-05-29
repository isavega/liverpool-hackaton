import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Button from '@mui/material/Button';


// Renders the publishing new bike view

function Publicar() {
  return (
    <div className="App">
       <header className="App-header">
          <div>
            <Button>PUBLICAR</Button> 
          </div>
       </header>        
      </div>
  );
}

export default Publicar;
