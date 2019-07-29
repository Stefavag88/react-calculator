import styled from "styled-components";
import styles from "../common/styles";



const StyledDropdown = styled.select`
  background: none;
  border: none;
  width: 100%;
  max-width: 180px;
  outline: none;
  box-shadow: none;
  font-size: 1.2em;
  font-weight:500;
  cursor: pointer;
  max-height: 10vh;
  z-index:1000;
  padding:0.1em 0.3em;
  text-align: ${props => props.textAlign};

  option{
      font-size:0.7em;
      background: ${styles.lightGrey};
  }

  option:checked,
  option:active,
  option:hover
  {
      background: ${styles.lightBlue}
  }
`;



export {StyledDropdown};