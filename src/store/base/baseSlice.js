/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import getPublications from "../../api/publications";

const initialState = {
  currentList: [],
  error: "",
  loading: false,
};

const fetchPublications = createAsyncThunk(
  "poke/fetchPublications",
  async (payload, _thunkAPI) => {
    console.log("ENTRE");
    const response = await getPublications(payload);
    console.log("DATA: ", response);
    /* return response.data; */
    return response;
  }
);

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setCurrentList: (state, action) => {
      state.currentList = action.payload;
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
      console.log("EXITO");
      console.log(action);
      state.currentList = action.payload;
      console.log("LISTA: ", state.currentList);
      state.error = false;
      state.loading = false;
    },
    [fetchPublications.rejected]: (state) => {
      console.log("FALLO");
      state.currentList = [];
      state.loading = false;
      state.error = true;
    },
    [fetchPublications.pending]: (state) => {
      console.log("PENDIENTE");
      state.error = false;
      state.loading = true;
    },
  },
});

export const { setCurrentList, setLoading, setError } = baseSlice.actions;
export const fetchPublicationsThunk = fetchPublications;
export const baseReducer = baseSlice.reducer;
