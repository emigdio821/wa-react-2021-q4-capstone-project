import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from 'pages/NotFound';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <NotFound msg="something went wrong" noHeight noExtraPadding />;
    }

    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
