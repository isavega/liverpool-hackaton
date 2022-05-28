/* eslint-disable no-param-reassign */
import axios from "axios";

const defaultOptions = {
  headers: {
    apikey: "application/json",
    Authorization: "Bearer SUPABASE_KEY",
  },
};

axios.defaults.baseURL =
  "https://oymdiutldfewjvmpkgam.supabase.co/rest/v1/available_bikes?select=*";

export default {
  get: (url, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
};
