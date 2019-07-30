import React, { useState, useEffect } from "react";
import {
  StyledCurrencyConverter,
  StyledInnerConverterContainer
} from "../../styledComponents/StyledContainer";
import { StyledDropdown } from "./../../styledComponents/StyledDropdown";
import { StyledInput, StyledSpan } from "../../styledComponents/StyledText";
import Control from "../buttons/Control";
import consts from "../../common/constants";

const baseRate = `${consts.DEFAULT_BASE_RATE}`; //Current subscription does not support changing base currency

const CurrencyConverter = ({ inputValue, currencyConverterVisible }) => {
  const [data, setData] = useState(null);
  const [targetRate, setTargetRate] = useState(`${consts.DEFAULT_TARGET_RATE}`);
  const [error, setError] = useState(null);

  useEffect(() => { 

    const fetchData = () => {

      if (!currencyConverterVisible || data) return;

      fetch(`${consts.API_URL}&access_key=${consts.API_KEY}`)
        .then(response => response.json())
        .then(jsonResponse => {
          setData(jsonResponse);
        })
        .catch(err => {
            setError(err);
        });
    };

    fetchData();
  }, [currencyConverterVisible, data]);

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
      <StyledSpan textAlign={'right'}>{`1 ${baseRate} = ${rate} ${targetRate}`}</StyledSpan>
    );
  };

  const doSetTargetRate = e => {
    const targetRate = e.target.value;

    setTargetRate(targetRate);
  };

  if(error) throw error;

  return (
    <StyledCurrencyConverter visible={currencyConverterVisible}>
      <StyledInnerConverterContainer>
        <StyledInput readOnly value={inputValue || 0} />
        <StyledDropdown textAlign={'left'} value={baseRate} disabled>
          {mapDataToOptions()}
        </StyledDropdown>
        <StyledInput readOnly value={calculateConversion()} />
        <StyledDropdown value={targetRate} onChange={doSetTargetRate}>
          {mapDataToOptions()}
        </StyledDropdown>
      </StyledInnerConverterContainer>
      <StyledInnerConverterContainer justifyContent={'flex-end'} alignItems={'flex-end'}>
        {showEquity()}
        <StyledSpan textAlign={'right'}>{data && `Updated ${data.date}`}</StyledSpan>
        <Control
          width={'8rem'}
          fontSize={'0.8em'}
          value={"UPDATE RATES"}
          onClick={() => setData(null)}
        />
      </StyledInnerConverterContainer>
    </StyledCurrencyConverter>
  );
};

export default CurrencyConverter;
