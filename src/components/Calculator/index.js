import React from "react";
import Screen from "../Screen";
import KeyPad from "../KeyPad";
import {Parser} from "expr-eval";
import { StyledCalculator } from "../../styledComponents/StyledContainer";

const parser = new Parser();
const regexp = /[+-/*]{1}/g;

class Calculator extends React.Component {
  state = {
    expressionString: "",
    screenValue: "",
    shouldClearScreen:false
  };

  onNumberClick = e => {

    const number = e.target.value;
    console.log("GIT NUMBER!!", number);

    if(this.state.shouldClearScreen){
        this.setState((state, props) => {
            return {screenValue: ""};
        })
    }

    this.setState((state, props) => {
        return {
            screenValue: state.screenValue + number,
            shouldClearScreen: false
        }
    });
  };

  onOperatorClick = e => {
    const operator = e.target.value;
    const {screenValue, expressionString} = this.state;

    if(screenValue === "") return;

    if(!expressionString){
        this.setState((state, props) => {
            return {
                expressionString: state.screenValue + operator + "x",
                shouldClearScreen: true
            }
        });
    }
    else if(expressionString.match(regexp).length >= 1){

        const expressionObj = parser.parse(expressionString);
        const parsedValue = expressionObj.evaluate({x: screenValue});

        this.setState((state, props) => {
            return {
                screenValue: parsedValue,
                expressionString: screenValue + operator + "x",
                shouldClearScreen: true
            }
        })
    }
  };

  render() {
    const screenProps = {
      calculationDetails: this.state.calculationDetails,
      screenValue: this.state.screenValue
    };

    return (
      <StyledCalculator>
        <Screen {...screenProps}/>
        <KeyPad
          onNumberClick={this.onNumberClick}
          onOperatorClick={this.onOperatorClick}
        />
      </StyledCalculator>
    );
  }
}

export default Calculator;
