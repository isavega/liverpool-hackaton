import { POST_BIKE } from "./type";

export const postBike = (data) => (dispatch) => {
  console.log("dfsksjd");
  dispatch({
    type: POST_BIKE,
    payload: data,
  });
};
