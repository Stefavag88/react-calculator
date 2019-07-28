import React from "react";
import { StyledControlButton } from "../../../styledComponents/StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Control = ({ value, icon, fontSize, onClick }) => {
  return (
    <StyledControlButton value={value} onClick={onClick} fontSize={fontSize}>
      {icon 
        ? ( <FontAwesomeIcon icon={icon} size="xs" />) 
        : value}
    </StyledControlButton>
  );
};

export default Control;