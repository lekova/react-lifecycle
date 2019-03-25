import React, { Component } from 'react';

export default class ErrorBoundaryDemo extends Component {
  render() {
    return (
      <div>
        <h2>Error Boundaries Demo</h2>
        <ErrorBoundary>
          <BadComponent />
        </ErrorBoundary>
      </div>
    );
  }
}

class BadComponent extends Component {
  state = {
    showBad: false,
  };

  render() {
    return (
      <div>
        <h3>A bad component</h3>
        <p>Should throw an error in about 5 seconds</p>
        <div>
          <p>
            Click this button to throw an error (that won't be caught): &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => {
                throw new Error('Test error');
              }}
            >
              NO BOOM
            </button>
          </p>
        </div>
        <div className="mt-2">
          <p>
            Click this button to throw an error that might be caught: &nbsp;
            <button className="btn btn-danger" onClick={() => this.setState({ showBad: true })}>
              BOOM
            </button>
          </p>
          {this.state.showBad ? <ComponentWithError /> : <span />}
        </div>
      </div>
    );
  }
}

const ComponentWithError = (props: any) => <span>Props.foo: {props.foo()}</span>;

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<any, ErrorBoundaryState> {
  state = {
    hasError: false,
  };

  // error is the actual error,
  // info is a component stack which will tell you who threw the error
  // No side-effects permitted
  static getDerivedStateFromError(error: any, info: any) {
    console.log('ErrorBoundary: Error captured: ', error);

    return { hasError: true };
  }

  // Arguments as above
  // But permmits side effects, like async logging of an error
  componentDidCatch() {
    // Do something async here.
    // Or, you know, whatever.
    console.error('ErrorBoundary.componentDidCatch()');
  }

  render() {
    console.log('ErrorBoundary.render()');
    if (this.state.hasError) {
      return <h3>Something terrible happened. Check the console.</h3>;
    } else {
      return this.props.children;
    }
  }
}
