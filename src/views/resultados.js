import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Button from '@mui/material/Button';


// Renders the bike results view

function Resultados() {
  return (
    <div className="App">
       <header className="App-header">
          <div>
            <Button>RESULTADOS</Button> 
          </div>
       </header>        
      </div>
  );
}

export default Resultados;
