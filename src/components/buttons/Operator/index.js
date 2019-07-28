import React from "react";
import { StyledOperatorButton } from "../../../styledComponents/StyledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Operator = ({ value, icon, fontSize, onClick }) => {

    const preventFontAwesomeClick = e => {
       
        e.preventDefault();
        e.stopPropagation();
        onClick(value);
    }

  return (
    <StyledOperatorButton value={value} onClick={onClick} fontSize={fontSize}>
      {icon 
        ? ( <FontAwesomeIcon onClick={preventFontAwesomeClick} icon={icon} size="xs" transform="shrink-2" />) 
        : value}
    </StyledOperatorButton>
  );
};

export default Operator;
