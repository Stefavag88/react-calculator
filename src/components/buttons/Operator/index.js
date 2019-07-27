import React from "react";
import { StyledOperatorButton } from "../../../styledComponents/StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Operator = ({ value, icon, fontSize, onClick }) => {
  return (
    <StyledOperatorButton value={value} onClick={onClick} fontSize={fontSize}>
      {icon 
        ? ( <FontAwesomeIcon icon={icon} size="xs" transform="shrink-2" />) 
        : value}
    </StyledOperatorButton>
  );
};

export default Operator;
