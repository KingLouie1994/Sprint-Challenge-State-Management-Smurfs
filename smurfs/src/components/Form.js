import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import styled from "styled-components";

export function Form({ formValues, changeInput, createSmurf }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    createSmurf(formValues);
  };

  return (
    <StyledForm className="component" onSubmit={onFormSubmit}>
      <h3>Add a Smurf here:</h3>
      <label>
        Name:
        <StyledInput value={formValues.name} onChange={onValueChange} name="name" />
      </label>
      <br />

      <label>
        Age:
        <StyledInput value={formValues.age} onChange={onValueChange} name="age" />
      </label>
      <br />

      <label>
        Height:
        <StyledInput
          value={formValues.height}
          onChange={onValueChange}
          name="height"
        />
      </label>
      <br />

      <StyledButton type="submit" />
    </StyledForm>
  );
}

export default connect(state => state, actionCreators)(Form);

//Styling here:

const StyledForm = styled.form`
  border: orange 1px solid;
  border-radius: 10px;
  width: 200px;
  margin: 60px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
`;

const StyledInput = styled.input`
  color: orange;
`;

const StyledButton = styled.input`
  width: 100px;
  font-size: 20px;
  background-color: orange;
  color: white;
  border-radius: 5px;
`;
