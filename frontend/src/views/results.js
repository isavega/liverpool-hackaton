import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import BikeCard from "../components/BikeCard";

// Renders the bike results view

function Results() {
  // fetch data

  const { publicationsList } = useSelector((state) => state.base);

  // find search term
  const location = useLocation();

  // filter by search term
  const value = location.search.substring(1);

  const bikeList = publicationsList.filter(function (x) {
    return x.address === value;
  });

  return (
    <div>
      <header className="App-header">
        <div>{bikeList.map((bikeInfo) => BikeCard(bikeInfo))}</div>
      </header>
    </div>
  );
}

export default Results;
