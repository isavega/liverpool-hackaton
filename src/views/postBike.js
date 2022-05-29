import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { createPublicationsThunk } from "../store/base/baseSlice";

// Renders the publishing new bike view

const PostBike = () => {
  const [userName, setUserName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log("Publicando", userName);
    dispatch(
      createPublicationsThunk({
        user: userName,
        address: address,
        price: price,
        available: true,
        description: description,
        title: postTitle,
      })
    );
  };

  const nameHandler = (event) => {
    setUserName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Tu nombre :)"
          value={userName}
          onChange={nameHandler}
        />
        <TextField
          required
          id="outlined-required"
          label="Título de tu publicación"
          value={postTitle}
          onChange={(input) => setPostTitle(input.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Dirección de retiro"
          value={address}
          onChange={(input) => setAddress(input.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Precio por día"
          value={price}
          onChange={(input) => setPrice(input.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Descripción del anuncio"
          value={description}
          onChange={(input) => setDescription(input.target.value)}
        />
      </div>
      <Button variant="contained" component="label">
        Foto
        <input type="file" hidden />
      </Button>
      <Button variant="contained" onClick={submitHandler}>
        Publicar
      </Button>
    </Box>
  );
};

export default PostBike;
