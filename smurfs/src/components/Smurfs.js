import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../state/actionCreators";
import SmurfsCard from "./SmurfsCard";
import styled from "styled-components";

export function Smurfs({ smurfs, getSmurfs }) {
  useEffect(() => {
    getSmurfs();
  });

  return (
    <Container>
      {smurfs.map(smurf => (
        <SmurfsCard smurf={smurf} />
      ))}
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs);

// Styling here:

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2%;
`;
