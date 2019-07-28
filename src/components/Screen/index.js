import React from "react";
import {
  StyledScreen,
  StyledResultView
} from "../../styledComponents/StyledContainer";
import CurrencyConverter from "../CurrencyConverter";

const Screen = ({ screenValue, currencyConverterVisible }) => (
  <StyledScreen>
    <CurrencyConverter
      inputValue={screenValue}
      currencyConverterVisible={currencyConverterVisible}
    />
    <StyledResultView visible={!currencyConverterVisible}>
      {screenValue}
    </StyledResultView>
  </StyledScreen>
);

export default Screen;
