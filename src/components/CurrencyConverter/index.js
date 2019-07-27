import React from "react";
import { StyledCurrencyConverter, StyledInnerConverterContainer } from "../../styledComponents/StyledContainer";
import { StyledDropdown } from "./../../styledComponents/StyledDropdown";
import StyledInput from "./../../styledComponents/StyledInput";

class CurrencyConverter extends React.Component {
  state = {
    data: null,
    error: null,
    shouldRefetch: false
  };

  componentDidUpdate() {
    if (
      this.props.currencyConverterVisible &&
      !(this.state.data && this.state.data.rates)
    )
      this.fetchData();
  }

  fetchData = () => {
    fetch(
      "http://data.fixer.io/api/latest?access_key=f440efc02a0d0f2c61695a51626b41e7"
    )
      .then(response => {
        if (!response.ok) throw new Error(`Fetch Error: `, response.statusText);

        return response.json();
      })
      .then(jsonResponse => {
        this.setState((state, props) => {
          return {
            data: jsonResponse
          };
        });
      })
      .catch(err => {
        this.setState((state, props) => {
          return {
            error: err
          };
        });
      });
  };

  mapDataToOptions = (selectBaseCurrency = false) => {
    if (!this.state.data || !this.state.data.rates) return;

    return Object.keys(this.state.data.rates).map(key => {
      if (selectBaseCurrency && key === this.state.data.base)
        return (
          <option selected key={key}>
            {key}
          </option>
        );

      return <option key={key}>{key}</option>;
    });
  };

  render() {
    return (
      <StyledCurrencyConverter visible={this.props.currencyConverterVisible}>
        <StyledInnerConverterContainer>
          <StyledInput value={this.props.inputValue || 0} />
          <StyledDropdown>{this.mapDataToOptions(true)}</StyledDropdown>

          <StyledInput value={this.convertedValue || 0} />
          <StyledDropdown>{this.mapDataToOptions()}</StyledDropdown>
        </StyledInnerConverterContainer>
        <StyledInnerConverterContainer>
            <div>Hello</div>
        </StyledInnerConverterContainer>
      </StyledCurrencyConverter>
    );
  }
}

export default CurrencyConverter;
