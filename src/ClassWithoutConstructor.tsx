import React, { Component } from 'react';

interface ClassWithoutConstructorState {
  firstName: string;
  lastName: string;
  userId: string;
}

export default class ClassWithoutConstructor extends Component<any, ClassWithoutConstructorState> {
  // No constructor? No problem!
  // Try commenting out one of the prooperties and TypeScript will complain
  state = {
    firstName: 'John',
    lastName: 'Paxton',
    userId: 'pax',
  };

  buttonHandler = () => {
    this.setState({
      firstName: 'Bob',
      lastName: 'Dobalina',
      userId: 'mr_dobalina',
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col">
        <h2>Component without a constructor demo</h2>
          <ul>
            <li>First Name: {this.state.firstName}</li>
            <li>Last Name: {this.state.lastName}</li>
            <li>User ID: {this.state.userId}</li>
          </ul>
          <button className="btn btn-warning" onClick={this.buttonHandler}>
            Swap Users
          </button>
        </div>
      </div>
    );
  }
}
