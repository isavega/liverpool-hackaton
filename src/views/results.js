import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchPublicationsThunk } from "../store/base/baseSlice";
import store from "../../src/store/index";
import BikeCard from "../components/BikeCard";

// Renders the bike results view

function Results() {
  // fetch data

  const { currentList } = useSelector((state) => state.base);

  currentList?.map((item) => <p>{item.user}</p>);

  // find search term
  const location = useLocation();

  // filter by search term
  const value = location.search.substring(1);

  const bikeList = currentList.filter(function (x) {
    return x.address === value;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {currentList.map((bikeInfo) => BikeCard(bikeInfo))}
        </div>
      </header>
    </div>
  );
}

export default Results;
