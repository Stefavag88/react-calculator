import React from "react";
import { StyledErrorContainer } from "../../styledComponents/StyledContainer";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorInfo: ""
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorInfo: error.message
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <StyledErrorContainer>
            <h1>Something went wrong.</h1>
            <p>{this.state.errorInfo}</p>
          </StyledErrorContainer>
          {this.props.children}
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
