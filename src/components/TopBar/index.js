import React from "react";
import { StyledTopBar } from "../../styledComponents/StyledContainer";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Control from "./../buttons/Control";

const TopBar = ({ onConverterToggle }) => (
  <StyledTopBar>
    <Control icon={faCoins} onClick={onConverterToggle} />
  </StyledTopBar>
);

export default TopBar;
