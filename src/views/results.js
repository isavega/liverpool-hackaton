import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";


// Renders the bike results view

function Results() {

  const location = useLocation();
  console.log("location is ", location.search.substring(1));

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

export default Results;
