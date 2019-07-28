import React from "react";
import Screen from "../Screen";
import KeyPad from "../KeyPad";
import TopBar from "../TopBar";
import { Parser } from "expr-eval";
import { StyledCalculator } from "../../styledComponents/StyledContainer";
import ErrorBoundary from "../ErrorBoundary";

class Calculator extends React.Component {
  parser = new Parser();
  operationRegex = /[+-/*]{1}/g;

  state = {
    expressionString: "",
    screenValue: "",
    shouldClearScreen: false,
    currencyConverterVisible: false
  };

  onNumberClick = e => {
    const number = e.target.value;

    if (this.state.shouldClearScreen) {
      this.setState((state, props) => {
        return { screenValue: "" };
      });
    }

    this.setState((state, props) => {
      return {
        screenValue: state.screenValue + number,
        shouldClearScreen: false
      };
    });
  };

  onOperatorClick = e => {
    const operator = this.operationRegex.test(e) ? e : e.target.value;
    const { screenValue, expressionString } = this.state;

    if (screenValue === "") return;

    if (!expressionString) {
      this.setState((state, props) => {
        return {
          expressionString: `${state.screenValue}${operator}x`,
          shouldClearScreen: true
        };
      });
    } else if (
      expressionString.match(this.operationRegex) &&
      expressionString.match(this.operationRegex).length >= 1
    ) {
      const parsedValue = this.parseExpression(screenValue, expressionString);

      this.setState((state, props) => {
        return {
          screenValue: `${parsedValue}`,
          expressionString: `${parsedValue}${operator}x`,
          shouldClearScreen: true
        };
      });
    }
  };

  onClearAllClick = e => {
    this.setState((state, props) => {
      return {
        screenValue: "",
        expressionString: "",
        shouldClearScreen: false
      };
    });
  };

  onClearScreenClick = e => {
    this.setState((state, props) => {
      return {
        screenValue: ""
      };
    });
  };

  onEqualsClick = e => {
    const { screenValue, expressionString } = this.state;

    if (!screenValue || !expressionString) return;

    const parsedValue = this.parseExpression(screenValue, expressionString);

    this.setState((state, props) => {
      return {
        screenValue: `${parsedValue}`,
        expressionString: "",
        shouldClearScreen: true
      };
    });
  };

  onBackspaceClick = e => {
    const { screenValue } = this.state;

    if (!screenValue) return;

    this.setState((state, props) => {
      const value = state.screenValue;
      return {
        screenValue: value.substring(0, value.length - 1)
      };
    });
  };

  onReverseSignClick = e => {
    const { screenValue } = this.state;

    if (!screenValue) return;

    const firstChar = screenValue[0];
    const replacedValue =
      firstChar === "-"
        ? screenValue.replace(firstChar, "")
        : `-${screenValue}`;

    this.setState((state, props) => {
      return {
        screenValue: replacedValue
      };
    });
  };

  onConverterToggle = e => {
    this.setState((state, props) => {
      return {
        currencyConverterVisible: !this.state.currencyConverterVisible
      };
    });
  };

  parseExpression = (screenValue, expressionString) => {
    let expressionObj;
    try {
      expressionObj = this.parser.parse(expressionString);
    } catch (error) {
      throw new Error(`Expression Parsing error: ${error}`);
    }

    return expressionObj.evaluate({ x: screenValue });
  };

  render() {
    const screenProps = {
      calculationDetails: this.state.calculationDetails,
      screenValue: this.state.screenValue,
      currencyConverterVisible: this.state.currencyConverterVisible
    };

    const keyPadProps = {
      onNumberClick: this.onNumberClick,
      onOperatorClick: this.onOperatorClick,
      onClearAllClick: this.onClearAllClick,
      onClearScreenClick: this.onClearScreenClick,
      onEqualsClick: this.onEqualsClick,
      onBackspaceClick: this.onBackspaceClick,
      onReverseSignClick: this.onReverseSignClick
    };

    return (
      <ErrorBoundary>
        <StyledCalculator>
          <TopBar onConverterToggle={this.onConverterToggle} />
          <Screen {...screenProps} />
          <KeyPad {...keyPadProps} />
        </StyledCalculator>
      </ErrorBoundary>
    );
  }
}

export default Calculator;
