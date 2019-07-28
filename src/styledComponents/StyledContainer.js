import styled from "styled-components";
import styles from "../common/styles";

const ContainerBase = styled.div`
  box-sizing: border-box;
  background: rgba(196, 196, 196, 0.4);
  border-radius: 1px;
  padding: 0.1em;
  min-width: 320px;
  max-width: 912px;
  width: 100%;
  height: 100vh;
`;

const StyledKeyPad = styled(ContainerBase)`
  height: 55vh;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  justify-content: start;
  align-content: end;
`;

const StyledScreen = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 40vh;
`;

const StyledResultView = styled.div`
  width:100%;
  font-size: 2em;
  text-align: right;
  display: ${props => (props.visible ? "inline" : "none")};
  word-wrap: break-word;
`;

const StyledCalculator = styled(ContainerBase)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledTopBar = styled(ContainerBase)`
  height: 5vh;
  display: flex;
  padding: 0;
  justify-content: flex-start;
  align-items: center;
`;

const StyledCurrencyConverter = styled.div`
width:100%;
  height: 30vh;
  padding: 0;
  justify-content: space-between;
  align-items: flex-start;
  display: ${props => (props.visible ? "flex" : "none")};
`;

const StyledInnerConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const StyledErrorContainer = styled(ContainerBase)`
    position: absolute;
    top:0;
    left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 26, 64, 0.2);
    color: rgba(255, 26, 64, 0.8); 
`;

export {
  StyledKeyPad,
  StyledCalculator,
  StyledScreen,
  StyledResultView,
  StyledTopBar,
  StyledCurrencyConverter,
  StyledInnerConverterContainer, 
  StyledErrorContainer
};
