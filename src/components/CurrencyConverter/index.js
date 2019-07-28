import React from "react";
import {
  StyledCurrencyConverter,
  StyledInnerConverterContainer
} from "../../styledComponents/StyledContainer";
import { StyledDropdown } from "./../../styledComponents/StyledDropdown";
import { StyledInput, StyledLeftSpan } from "../../styledComponents/StyledText";
import Control from "../buttons/Control";

class CurrencyConverter extends React.Component {
  state = {
    data: null,
    error: null,
    shouldRefetch: false,
    baseRate: "EUR",
    targetRate: "USD"
  };

  componentDidUpdate() {
    if (
      this.props.currencyConverterVisible &&
      !(this.state.data && this.state.data.rates)
    )
      this.fetchData();
  }

  fetchData = (baseCurrency = null) => {
    let url =
      "http://data.fixer.io/api/latest?access_key=f440efc02a0d0f2c61695a51626b41e7";

    if (baseCurrency) url = `${url}&base=${baseCurrency}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`Fetch Error: `, response.statusText);

        return response.json();
      })
      .then(jsonResponse => {
        this.setState((state, props) => {
          return {
            data: jsonResponse,
            baseRate: jsonResponse.base
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

  fetchWithChangedBase = e => {
    const baseRate = e.target.value;
    this.setState((state, props) => {
      return { baseRate };
    });
    this.fetchData(baseRate);
  };

  mapDataToOptions = baseKey => {
    const { data } = this.state;

    if (!data || !data.rates) return;

    return Object.keys(data.rates).map(key => {
      if (key === baseKey)
        return (
          <option selected key={key}>
            {key}
          </option>
        );

      return <option key={key}>{key}</option>;
    });
  };

  calculateConversion = () => {
    const { data, targetRate } = this.state;

    if (!data || !data.rates || this.props.inputValue == 0) return 0;

    const rate = data.rates[targetRate];
    return rate * parseFloat(this.props.inputValue).toFixed(2);
  };

  showEquity = () => {
    const { data, targetRate, baseRate } = this.state;

    if (!data || !data.rates) return;

    const rate = data.rates[targetRate];
    return (
      <StyledLeftSpan>{`1 ${baseRate} = ${rate} ${targetRate}`}</StyledLeftSpan>
    );
  };

  setTargetRate = e => {
    const targetRate = e.target.value;

    this.setState((state, props) => {
      return {
        targetRate
      };
    });
  };

  render() {
    return (
      <StyledCurrencyConverter visible={this.props.currencyConverterVisible}>
        <StyledInnerConverterContainer>
          <StyledInput
            onChange={this.calculateConversion}
            value={this.props.inputValue || 0}
          />
          <StyledDropdown onChange={this.fetchWithChangedBase}>
            {this.mapDataToOptions(this.state.baseRate)}
          </StyledDropdown>
          <StyledInput readonly value={this.calculateConversion()} />
          <StyledDropdown onChange={this.setTargetRate}>
            {this.mapDataToOptions(this.state.targetRate)}
          </StyledDropdown>
        </StyledInnerConverterContainer>
        <StyledInnerConverterContainer>
          {this.showEquity()}
          <h6>{this.state.data && `Updated ${this.state.data.date}`}</h6>
          <Control
            value={"UPDATE RATES"}
            fontSize={"0.8em"}
            onClick={this.fetchData}
          />
        </StyledInnerConverterContainer>
      </StyledCurrencyConverter>
    );
  }
}

export default CurrencyConverter;
