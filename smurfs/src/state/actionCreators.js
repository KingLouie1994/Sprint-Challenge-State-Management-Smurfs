import axios from "axios";
import * as types from "./actionTypes";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      const smurfs = response.data;
      dispatch({
        type: types.SET_SMURFS,
        payload: smurfs
      });
    })
    .catch(err => {
      console.log(err);
    });
};
