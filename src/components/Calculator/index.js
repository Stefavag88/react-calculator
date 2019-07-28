import React, { useState } from "react";
import Screen from "../Screen";
import KeyPad from "../KeyPad";
import TopBar from "../TopBar";
import { StyledCalculator } from "../../styledComponents/StyledContainer";
import ErrorBoundary from "../ErrorBoundary";
import { parseExpression } from "../../common/parser";

const Calculator = () => {
  const operationRegex = /[+-/*]{1}/g;
  const [expressionString, setExpressionString] = useState("");
  const [screenValue, setScreenValue] = useState("");
  const [shouldClearScreen, setShouldClearScreen] = useState(false);
  const [currencyConverterVisible, setCurrencyConverterVisible] = useState(false);

  const onNumberClick = e => {
    const number = e.target.value;
    const newScreenValue = shouldClearScreen ? "" : screenValue;

    setScreenValue(`${newScreenValue}${number}`);

    if (shouldClearScreen) setShouldClearScreen(false);
  };

  const onOperatorClick = e => {
    const operator = operationRegex.test(e) ? e : e.target.value;

    if (!screenValue) return;

    if (!expressionString) {
      setExpressionString(`${screenValue}${operator}x`);
      setShouldClearScreen(true);
    } else if (
      expressionString.match(operationRegex) &&
      expressionString.match(operationRegex).length >= 1
    ) {
      const parsedValue = parseExpression(screenValue, expressionString);
      setScreenValue(`${parsedValue}`);
      setExpressionString(`${parsedValue}${operator}x`);
      setShouldClearScreen(true);
    }
  };

  const onClearAllClick = e => {
    setScreenValue("");
    setExpressionString("");
    setShouldClearScreen(false);
  };

  const onClearScreenClick = e => {
    setScreenValue("");
  };

  const onEqualsClick = e => {
    if (!screenValue || !expressionString) return;

    const parsedValue = parseExpression(screenValue, expressionString);

    setScreenValue(`${parsedValue}`);
    setExpressionString("");
    setShouldClearScreen(true);
  };

  const onBackspaceClick = e => {
    if (!screenValue) return;

    setScreenValue(screenValue.substring(0, screenValue.length - 1));
  };

  const onReverseSignClick = e => {
    if (!screenValue) return;

    const firstChar = screenValue[0];
    const replacedValue =
      firstChar === "-"
        ? screenValue.replace(firstChar, "")
        : `-${screenValue}`;

    setScreenValue(replacedValue);
  };

  const onConverterToggle = e => {
    setCurrencyConverterVisible(!currencyConverterVisible);
  };

  return (
    <ErrorBoundary>
      <StyledCalculator>
        <TopBar onConverterToggle={onConverterToggle} />
        <Screen
          {...{
            screenValue,
            currencyConverterVisible
          }}
        />
        <KeyPad
          {...{
            onNumberClick,
            onOperatorClick,
            onClearAllClick,
            onClearScreenClick,
            onEqualsClick,
            onBackspaceClick,
            onReverseSignClick
          }}
        />
      </StyledCalculator>
    </ErrorBoundary>
  );
};

export default Calculator;
