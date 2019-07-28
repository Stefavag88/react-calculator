import React, { useState, useEffect } from "react";
import {
  StyledCurrencyConverter,
  StyledInnerConverterContainer
} from "../../styledComponents/StyledContainer";
import { StyledDropdown } from "./../../styledComponents/StyledDropdown";
import { StyledInput, StyledLeftSpan } from "../../styledComponents/StyledText";
import Control from "../buttons/Control";

const CurrencyConverter = ({ inputValue, currencyConverterVisible }) => {
  const [data, setData] = useState(null);
  const [baseRate, setBaseRate] = useState("EUR");
  const [targetRate, setTargetRate] = useState("USD");
  const [error, setError] = useState(null);

  useEffect(() => { 

    const fetchData = () => {
      if (!currencyConverterVisible || data || error) return;

      let url =
        "http://data.fixer.io/api/latest?access_key=f440efc02a0d0f2c61695a51626b41e7";

      url = `${url}&base=${baseRate}`;

      fetch(url)
        .then(response => response.json())
        .then(jsonResponse => {
          setData(jsonResponse);
          setBaseRate(jsonResponse.base);
        })
        .catch(err => {
            setError(err);
        });
    };

    fetchData();
  }, [baseRate, currencyConverterVisible, data, error]);

  const doSetBaseRate = e => {
    const baseRate = e.target.value;
    setBaseRate(baseRate);
  };

  const mapDataToOptions = () => {
    if (!data || !data.rates) return;

    return Object.keys(data.rates).map(key => (<option key={key}>{key}</option>));
  };

  const calculateConversion = () => {
    if (!data || !data.rates || inputValue == 0) return 0;

    const rate = data.rates[targetRate];
    return parseFloat(rate * inputValue).toFixed(3);
  };

  const showEquity = () => {
    if (!data || !data.rates) return;

    const rate = data.rates[targetRate];
    return (
      <StyledLeftSpan>{`1 ${baseRate} = ${rate} ${targetRate}`}</StyledLeftSpan>
    );
  };

  const doSetTargetRate = e => {
    const targetRate = e.target.value;

    setTargetRate(targetRate);
  };

  return (
    <StyledCurrencyConverter visible={currencyConverterVisible}>
      <StyledInnerConverterContainer>
        <StyledInput readOnly value={inputValue || 0} />
        <StyledDropdown value={baseRate} onChange={doSetBaseRate}>
          {mapDataToOptions()}
        </StyledDropdown>
        <StyledInput readOnly value={calculateConversion()} />
        <StyledDropdown value={targetRate} onChange={doSetTargetRate}>
          {mapDataToOptions()}
        </StyledDropdown>
      </StyledInnerConverterContainer>
      <StyledInnerConverterContainer>
        {showEquity()}
        <h6>{data && `Updated ${data.date}`}</h6>
        <Control
          value={"UPDATE RATES"}
          fontSize={"0.8em"}
          onClick={() => setData(null)}
        />
      </StyledInnerConverterContainer>
    </StyledCurrencyConverter>
  );
};

export default CurrencyConverter;
