import React from "react";
import { StyledTopBar } from "../../styledComponents/StyledContainer";
import { faCoins} from "@fortawesome/free-solid-svg-icons";
import Control from "./../buttons/Control";

class TopBar extends React.Component {

  render() {
    return (
      <StyledTopBar>
        <Control icon={faCoins} onClick={this.props.onConverterToggle} />
      </StyledTopBar>
    );
  }
}

export default TopBar;
