import styled from "styled-components";
import styles from "../common/styles";

const ContainerBase = styled.div`
  background: rgba(196, 196, 196, 0.4);
  border-radius: 1px;
  padding: 0.1em;
  width: 320px;
`;

const StyledKeyPad = styled(ContainerBase)`
  display: grid;
  grid-template-columns: 80px 80px 80px 80px;
  grid-template-rows: auto;
`;

const StyledScreen = styled(ContainerBase)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 150px;
`;

const StyledResultView = styled.div`
  font-size: 3em;
  width: 100%;
  text-align: right;
  margin: 0.1em;
`;

const StyledDetailsView = styled.div`
  font-size: 1.5em;
  color: rgba(171,171,171,1);
  width: 100%;
  text-align: right;
  margin: 0.1em;
`;

export { StyledKeyPad, StyledScreen, StyledResultView, StyledDetailsView };
