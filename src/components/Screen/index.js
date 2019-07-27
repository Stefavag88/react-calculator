import React from 'react';
import {StyledScreen, StyledResultView} from '../../styledComponents/StyledContainer';

class Screen extends React.Component{


    render(){
        return (
            <StyledScreen>
                <StyledResultView>{this.props.screenValue}</StyledResultView>
            </StyledScreen>
        );
    }
}

export default Screen;