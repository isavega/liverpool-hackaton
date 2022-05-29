import React, { useEffect, useState } from "react";

// store
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchPublicationsThunk } from "./store/base/baseSlice";
import store from "../src/store/index";

// router
import { Outlet, Link } from "react-router-dom";

// style
import "./App.css";
import logo from "./assets/logo.svg";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = (classes) => {
  // set state for city search
  const [searchCity, setSearchCity] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublicationsThunk());
  }, []);

  const { publicationsList } = useSelector((state) => state.base);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img
            src={logo}
            alt="default"
            style={{
              marginTop: 10,
            }}
          />
        </Link>
        <div className="row">
          <TextField
            onChange={(event) => setSearchCity(event.target.value)}
            id="outlined-basic"
            label="Ciudad"
            variant="outlined"
          />
          <Button variant="contained" color="warning">
            <Link to={{ pathname: "/results", search: searchCity }}>GO!</Link>
          </Button>
        </div>
      </header>
      <div>
        <div>
          {publicationsList.map((item, i) => (
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
              style={{
                borderColor: "#A3FBCA",
                borderWidth: 15,
                color: "black",
                padding: "5%",
              }}
            >
              <Box sx={{ my: 3, mx: 6 }} p="5%">
                <Avatar
                  alt="default"
                  src={
                    item.img_url
                      ? item.img_url
                      : "https://orangebikes.net/wp-content/uploads/2020/05/Mejores-Marcas-de-Bicicleta-del-Mundo-730x400.jpg"
                  }
                  sx={{ width: 730, height: 400 }}
                  variant="square"
                  style={{
                    borderRadius: 15,
                  }}
                />
                <Grid item>
                  <Typography gutterBottom variant="h4" component="div">
                    {item.title ? item.title : "Se arrienda Bicicleta"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.address}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="h6" component="div">
                    {`$ ${item.price} CLP`}
                  </Typography>
                </Grid>

                <Typography color="text.secondary" variant="body2">
                  {item.description
                    ? item.description
                    : "Arriendo mi bici por no uso :)"}
                </Typography>
              </Box>
              <Divider variant="middle" />

              <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                <Button>RESERVAR</Button>
              </Box>
            </Box>
          ))}
        </div>
        <br></br>
        <Button variant="outlined" color="warning">
          <Link to="/publicar">Publicar</Link>
        </Button>
      </div>
      <Outlet />
    </div>
  );
};

export default AppWrapper;
