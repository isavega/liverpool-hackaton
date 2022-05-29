import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import {
  createPublicationsThunk,
  createImageThunk,
} from "../store/base/baseSlice";

// Renders the publishing new bike view

const PostBike = () => {
  const [userName, setUserName] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img_url, setImgUrl] = useState("");
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
        img_url: img_url
      })
    );
  };

  const submitImage = async (data) => {
    console.log(data.target.files[0]);
    let resp = dispatch(createImageThunk(data.target.files[0]));
    resp.then(function (info){
      console.log(info.payload['image_url']);
      setImgUrl(info.payload['image_url']);
    });
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
          onChange={(input) => setUserName(input.target.value)}
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
        <input type="file" hidden onChange={submitImage} />
      </Button>
      <Button variant="contained" onClick={submitHandler}>
        Publicar
      </Button>
    </Box>
  );
};

export default PostBike;
