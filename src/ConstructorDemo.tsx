import React, { Component } from 'react';

interface ConstructorDemoState {
  firstName: string;
  lastName: string;
  userId: string;
}

export default class ConstructorDemo extends Component<any, ConstructorDemoState> {
  constructor(props: any) {
    // Call super() before you interact with _this_
    super(props);

    console.log('ConstructorDemo constructor running.');

    // The only time you should assign to state in a class-based constructor
    this.state = {
      firstName: 'John',
      lastName: 'Paxton',
      userId: 'pax',
    };
  }

  buttonHandler = () => {
    if (this.state.userId === 'pax') {
      this.setState({
        firstName: 'Bob',
        lastName: 'Dobalina',
        userId: 'mr_dobalina',
      });
    } else {
      this.setState({
        firstName: 'John',
        lastName: 'Paxton',
        userId: 'pax',
      });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>constructor() demo</h2>
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
