import React from "react";
import { StyledControlButton } from "../../../styledComponents/StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Control = ({ value, icon, onClick, width, textAlign, fontSize }) => {
  return (
    <StyledControlButton
      value={value}
      onClick={onClick}
      width={width}
      textAlign={textAlign}
      fontSize={fontSize}
    >
      {icon ? <FontAwesomeIcon icon={icon} size="xs" /> : value}
    </StyledControlButton>
  );
};

export default Control;
