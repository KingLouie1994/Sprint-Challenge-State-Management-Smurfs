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

export function changeInput(target) {
  return {
    type: types.ON_INPUT_CHANGE,
    payload: {
      name: target.name,
      value: target.value
    }
  };
}

export const createSmurf = newSmurf => dispatch => {
  axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(response => {
      dispatch({
        type: types.ADD_SMURF,
        payload: response.data
      });
      dispatch({
          type: types.ADD_SMURF_SUCCESS
      })
    })

    .catch(error => {
      console.log(error.message);
    });
};
