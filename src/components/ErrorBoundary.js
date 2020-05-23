import React from 'react';

class ErrorBoundary extends React.Component {
  //   static getDerivedStateFromError(error) {
  //     console.log('getDerivedStateFromError:', error);

  //     return { hasError: true };
  //   }

  constructor(props) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error message:', error.message);
    console.log('ErrorInfo:', errorInfo.componentStack);

    this.setState({
      error: error.message,
      errorInfo: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details>
            <h3>{this.state.error}</h3>
            <p>{this.state.errorInfo}</p>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
