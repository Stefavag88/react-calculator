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

const KeyPad = ({
  onNumberClick,
  onOperatorClick,
  onClearAllClick,
  onClearScreenClick,
  onBackspaceClick,
  onReverseSignClick,
  onEqualsClick
}) => (
  <StyledKeyPad>
    <Operator value={"C"} fontSize={"1.1em"} onClick={onClearAllClick} />
    <Operator value={"CE"} fontSize={"1.1em"} onClick={onClearScreenClick} />
    <Operator value={"<-"} icon={faBackspace} onClick={onBackspaceClick} />
    <Operator value={"/"} icon={faDivide} onClick={onOperatorClick} />
    <Number value={7} onClick={onNumberClick} />
    <Number value={8} onClick={onNumberClick} />
    <Number value={9} onClick={onNumberClick} />
    <Operator value={"*"} icon={faTimes} onClick={onOperatorClick} />
    <Number value={4} onClick={onNumberClick} />
    <Number value={5} onClick={onNumberClick} />
    <Number value={6} onClick={onNumberClick} />
    <Operator value={"-"} icon={faMinus} onClick={onOperatorClick} />
    <Number value={1} onClick={onNumberClick} />
    <Number value={2} onClick={onNumberClick} />
    <Number value={3} onClick={onNumberClick} />
    <Operator value={"+"} icon={faPlus} onClick={onOperatorClick} />
    <Operator value={"+/-"} fontSize={"1.1em"} onClick={onReverseSignClick} />
    <Number value={0} onClick={onNumberClick} />
    <Number value={"."} onClick={onNumberClick} />
    <Operator value={"="} icon={faEquals} onClick={onEqualsClick} />
  </StyledKeyPad>
);

export default KeyPad;
