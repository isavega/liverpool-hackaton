import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchPublicationsThunk } from "./store/base/baseSlice";
import store from "../src/store/index";
import Button from "@mui/material/Button";
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPublicationsThunk());
  }, []);

  const { currentList, loading, error } = useSelector((state) => state.base);

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div>
          {currentList?.map((item) => (
            <p>{item.user}</p>
          ))}
          <Button variant="contained" color="warning">
            <Link to="/resultados">GO!</Link>
          </Button>
          <br></br>
          <Button variant="outlined" color="warning">
            <Link to="/publicar">Publicar</Link>
          </Button>
        </div>
        <Outlet />
      </header>
    </div>
  );
};

export default AppWrapper;
