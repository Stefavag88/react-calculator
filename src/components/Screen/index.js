import React from "react";
import {
  StyledScreen,
  StyledResultView
} from "../../styledComponents/StyledContainer";
import CurrencyConverter from "../CurrencyConverter";

const showZeroIfEmpty = value => value === "" ? "0": value;

const Screen = ({ screenValue, currencyConverterVisible }) => (
  <StyledScreen>
    <CurrencyConverter
      inputValue={showZeroIfEmpty(screenValue)}
      currencyConverterVisible={currencyConverterVisible}
    />
    <StyledResultView visible={!currencyConverterVisible}>
      {showZeroIfEmpty(screenValue)}
    </StyledResultView>
  </StyledScreen>
);

export default Screen;
