import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { fetchPublicationsThunk } from "./store/base/baseSlice";
import store from "../src/store/index";

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
  });

  const { currentList, loading, error } = useSelector((state) => state.base);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {currentList?.map((item) => (
          <p>{item.user}</p>
        ))}
      </header>
    </div>
  );
};

export default AppWrapper;
