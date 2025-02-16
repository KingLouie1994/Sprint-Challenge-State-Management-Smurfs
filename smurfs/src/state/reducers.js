import * as types from "./actionTypes";

const initialSmurfs = [];

export function smurfsReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case types.SET_SMURFS:
      return action.payload;
    case types.ADD_SMURF:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  name: "",
  age: "",
  height: ""
};

export function formReducer(state = initialFormState, action) {
  switch (action.type) {
    case types.ON_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case types.ADD_SMURF_SUCCESS:
      return {
        name: "",
        age: "",
        height: ""
      };

    default:
      return state;
  }
}
