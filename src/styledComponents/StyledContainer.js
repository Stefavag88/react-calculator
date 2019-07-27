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
  height: 60vh;
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
  font-size: 10vw;
  width: 100%;
  text-align: right;
`;

const StyledDetailsView = styled.div`
  font-size: 1.5em;
  color: rgba(171, 171, 171, 1);
  width: 100%;
  text-align: right;
  margin: 0.1em;
`;

const StyledCalculator = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export {
  StyledKeyPad,
  StyledCalculator,
  StyledScreen,
  StyledResultView,
  StyledDetailsView
};
