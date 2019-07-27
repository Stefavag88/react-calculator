import React from "react";
import { StyledNumberButton } from "../../../styledComponents/StyledButton";

const Number = ({ value, onClick }) => {
  return (
    <StyledNumberButton value={value} onClick={onClick}>
      {value}
    </StyledNumberButton>
  );
};

export default Number;
