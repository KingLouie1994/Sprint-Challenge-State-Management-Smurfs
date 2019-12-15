import React from "react";
import styled from "styled-components";

export default function SmurfCard({ smurf }) {
  return (
    <StyledCard>
      <h4>Smurf Details</h4>
      <p>Name: {smurf.name}</p>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </StyledCard>
  );
}

// Styling here:

const StyledCard = styled.div`
color: white;
background-color: orange;
width: 20%;
text-align: center;
padding: 0.5%;
margin: 0.5%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;
`;
