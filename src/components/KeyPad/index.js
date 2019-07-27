import React from "react";
import Number from "../buttons/Number";
import Operator from "../buttons/Operator";
import { StyledKeyPad } from "../../styledComponents/StyledContainer";
import {
  faTimes,
  faPlus,
  faMinus,
  faDivide,
  faBackspace,
  faEquals
} from "@fortawesome/free-solid-svg-icons";

class KeyPad extends React.Component {
  render() {
    return (
      <StyledKeyPad>
        <Operator value={"C"} fontSize={"1.1em"} onClick={this.props.onClearAllClick}/>
        <Operator value={"CE"} fontSize={"1.1em"} onClick={this.props.onClearScreenClick} />
        <Operator value={"<-"} icon={faBackspace} onClick={this.props.onBackspaceClick}/>
        <Operator value={"/"} icon={faDivide} onClick={this.props.onOperatorClick}/>
        <Number value={7} onClick={this.props.onNumberClick}/>
        <Number value={8} onClick={this.props.onNumberClick}/>
        <Number value={9} onClick={this.props.onNumberClick}/>
        <Operator value={"*"} icon={faTimes} onClick={this.props.onOperatorClick}/>
        <Number value={4} onClick={this.props.onNumberClick} />
        <Number value={5} onClick={this.props.onNumberClick} />
        <Number value={6} onClick={this.props.onNumberClick} />
        <Operator value={"-"} icon={faMinus} onClick={this.props.onOperatorClick}/>
        <Number value={1} onClick={this.props.onNumberClick} />
        <Number value={2} onClick={this.props.onNumberClick} />
        <Number value={"3"} onClick={this.props.onNumberClick} />
        <Operator value={"+"} icon={faPlus} onClick={this.props.onOperatorClick}/>
        <Operator value={"+/-"} fontSize={"1.1em"} onClick={this.props.onReverseSignClick}/>
        <Number value={0} onClick={this.props.onNumberClick} />
        <Number value={"."} onClick={this.props.onNumberClick}/>
        <Operator value={"="} icon={faEquals} onClick={this.props.onEqualsClick}/>
      </StyledKeyPad>
    );
  }
}

export default KeyPad;
