import Button from '@mui/material/Button';
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchPublicationsThunk } from "../store/base/baseSlice";
import store from "../../src/store/index";
import BikeCard from "../components/BikeCard"

// Renders the bike results view

function Results() {

// fetch data

  const { publicationsList } = useSelector((state) => state.base);

  console.log( "publicationsList is ", publicationsList );

  publicationsList?.map((item) => (
    <p>{item.user}</p>
  ))

// find search term
  const location = useLocation();
  console.log("location is ", location.search.substring(1));

// filter by search term
  const value = location.search.substring(1)


  // Si usuario puso algo

  var bikeList = publicationsList.filter(function(x) {
    return x.address == value;
  })

  console.log("filteredlist is", bikeList);

  // Error que usuario no haya puesto nada, mostrar todo

  if (value=="") {
    bikeList = publicationsList
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          {bikeList.map(bikeInfo => BikeCard(bikeInfo))}
        </div>
      </header>
    </div>
  );
}

export default Results;
