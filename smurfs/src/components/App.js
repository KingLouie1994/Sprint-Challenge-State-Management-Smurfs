import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Header className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Here you can find the list of your smurfs:</div>
      </Header>
    );
  }
}

export default App;

// Styling here:

const Header = styled.div`
  color: white;
  background-color: orange;
  width: 95%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;
