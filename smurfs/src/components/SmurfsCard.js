import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

export function SmurfsCard({ smurf }) {
  return (
    <Card>
      <p>Name: {smurf.name}</p>
      <p>Height: {smurf.height}</p>
      <p>Age: {smurf.age}</p>
    </Card>
  );
}

export default connect(state => state, {})(SmurfsCard);

// Styling here:

const Card = styled.div`
  background-color: orange;
  color: white;
  width: 10%;
  text-align: center;
  padding: 0.5%;
  margin: 1%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  border-radius: 5px;
`;
