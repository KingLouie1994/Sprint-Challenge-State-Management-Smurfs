import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { smurfsReducer, formReducer } from "./state/reducers";
import Smurfs from "./components/Smurfs";
import Form from "./components/Form";
import styled from 'styled-components';

const monsterReducer = combineReducers({
  smurfs: smurfsReducer,
  formValues: formReducer
});

export const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Styling here:
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

ReactDOM.render(
  <StyledContainer>
    <Provider store={store}>
      <App />
      <Form />
      <Smurfs />
    </Provider>
  </StyledContainer>,
  document.getElementById("root")
);


