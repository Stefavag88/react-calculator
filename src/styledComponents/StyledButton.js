import styled from 'styled-components'
import styles from '../common/styles';

const ButtonBase = styled.button`
  color: ${styles.black};
  border-radius: 1px;
  border: 1px solid rgba(196,196,196, 0.2);
  padding: 0.4em 0.8em;
  font-size:1.2em;
  height: 10vh;
  width: auto;
  :hover{
    border: 1px solid rgba(196,196,196, 0.8);
  }
`;

const StyledNumberButton = styled(ButtonBase)`
  background: ${styles.white};
  font-weight: 500;

  :hover{
    background: ${styles.lightGrey};
  }
`
const StyledOperatorButton = styled(ButtonBase)`
  background: ${styles.lightGrey};
  font-weight: 500; 
  font-size: ${props => props.fontSize || '1.2em'};
  text-align: ${props => props.textAlign || 'center'};

  :hover{
    background: ${styles.lightBlue};
  }
`

const StyledControlButton = styled(StyledOperatorButton)`
  background: none;
  border: 1px solid transparent;
  font-weight: 300;
  height:5vh;
  text-align:right;
  padding: 0.1em 0.3em;
  text-align:${props => props.textAlign};
  font-size: ${props => props.fontSize || '1.2em'};
  justify-self: ${props => props.justifySelf || 'inherit'};

  :hover{
    background: ${styles.lightBlue};
  }
`

export {
    StyledNumberButton, 
    StyledOperatorButton,
    StyledControlButton
};


