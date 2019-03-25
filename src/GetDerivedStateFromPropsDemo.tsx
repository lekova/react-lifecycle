import React, { Component } from 'react';

interface GetDerivedStateFromPropsDemoState {
  counter: number;
}

export default class GetDerivedStateFromPropsDemo extends Component<
  any,
  GetDerivedStateFromPropsDemoState
> {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <h2>getDerivedStateFromProps() Demo</h2>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Update Props
        </button>
        &nbsp;
        <GDSFPChild counter={this.state.counter} />
      </div>
    );
  }
}

interface GDSFPChildState {
  alpha: string;
  beta: string;
}

interface GDSFPChildProps {
  counter: number;
}

class GDSFPChild extends Component<GDSFPChildProps, GDSFPChildState> {
  state = {
    alpha: 'alpha',
    beta: 'beta',
  };

  /*
    Called before EVERY render
    Return null to change nothing;
    Return an object to update the state
  */
  static getDerivedStateFromProps(newProps: GDSFPChildProps, oldState: GDSFPChildState) {
    // BAD use case, just testing something here
    return {
      beta: oldState.beta + newProps.counter,
    };
  }

  render() {
    console.log('GDSFPChild.render() called');
    return (
      <ul>
        <li>alpha: {this.state.alpha}</li>
        <li>beta: {this.state.beta}</li>
      </ul>
    )
  }
}
