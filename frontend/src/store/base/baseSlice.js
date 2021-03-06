/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPublications, postPublications } from "../../api/publications";
import { postImage } from "../../api/postImage";

const initialState = {
  publicationsList: [],
  error: "",
  loading: false,
};

const fetchPublications = createAsyncThunk(
  "fetchPublications",
  async (payload, _thunkAPI) => {
    const response = await getPublications(payload);
    return response;
  }
);

const createPublications = createAsyncThunk(
  "postPublications",
  async (payload, _thunkAPI) => {
    const response = await postPublications(payload);
    return response;
  }
);

const createImage = createAsyncThunk(
  "postPublications",
  async (payload, _thunkAPI) => {
    const response = await postImage(payload);
    return response;
  }
);

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setPublicationsList: (state, action) => {
      state.publicationsList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchPublications.fulfilled]: (state, action) => {
      console.log("GET EXITO");

      state.publicationsList = action.payload;

      state.error = false;
      state.loading = false;
    },
    [fetchPublications.rejected]: (state) => {
      console.log("GET FALLO");
      state.publicationsList = [];
      state.loading = false;
      state.error = true;
    },
    [fetchPublications.pending]: (state) => {
      console.log("GET PENDIENTE");
      state.error = false;
      state.loading = true;
    },
    [createPublications.fulfilled]: (state, action) => {
      console.log("POST EXITO");

      state.publicationsList.unshift(action.payload);
      state.error = false;
      state.loading = false;
    },
    [createPublications.rejected]: (state) => {
      console.log("POST FALLO");
      state.publicationsList = [];
      state.loading = false;
      state.error = true;
    },
    [createPublications.pending]: (state) => {
      console.log("POST PENDIENTE");
      state.error = false;
      state.loading = true;
    },
    [createImage.fulfilled]: (state, action) => {
      console.log("POST IMAGE EXITO");
      state.error = false;
      state.loading = false;
    },
  },
});

export const { setPublicationsList, setLoading, setError } = baseSlice.actions;
export const fetchPublicationsThunk = fetchPublications;
export const createPublicationsThunk = createPublications;
export const createImageThunk = createImage;
export const baseReducer = baseSlice.reducer;
