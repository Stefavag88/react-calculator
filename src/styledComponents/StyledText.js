import styled from "styled-components";

const StyledInput = styled.input`
  background: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1.5em;
  font-weight:300;
  padding:0.3em;
`;

const StyledSpan = styled.span`
  background: none;
  width: 100%;
  border: none;
  outline: none;
  box-shadow: none;
  padding:0.1em;
  font-size: 0.8em;
  font-weight:500;
  text-align: ${props => props.textAlign};
`;

export {StyledInput, StyledSpan};
