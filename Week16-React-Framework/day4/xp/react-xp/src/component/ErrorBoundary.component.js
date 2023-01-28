import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: false });
  }
  render() {
    if (this.state.hasError) {
        return <div>Something went wrong</div>;
    }
    return this.props.childern;
  }
}

