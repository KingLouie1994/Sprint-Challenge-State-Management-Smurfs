import * as types from "./actionTypes";

const initialSmurfs = [];
export function smurfsReducer(smurfs = initialSmurfs, action) {
  switch (action.type) {
    case types.SET_SMURFS:
      return action.payload;
    default:
      return smurfs;
  }
}