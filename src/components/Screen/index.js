import React from 'react';
import {StyledScreen, StyledResultView} from '../../styledComponents/StyledContainer';
import CurrencyConverter from '../CurrencyConverter';

class Screen extends React.Component{


    render(){
        return (
            <StyledScreen>
                <CurrencyConverter 
                    inputValue={this.props.screenValue} 
                    currencyConverterVisible={this.props.currencyConverterVisible}/>
                <StyledResultView 
                    visible={!this.props.currencyConverterVisible}>
                    {this.props.screenValue}
                </StyledResultView>
            </StyledScreen>
        );
    }
}

export default Screen;