import React, { Component } from 'react';
import Person from './common/Person';
import Spinner from './Spinner';
import subscriptionService from './SubscriptionService';

interface ComponentDidMountDemoState {
  people: Person[];
}

// componentDidMount runs exactly once, after the component is mounted into the DOM
// Runs after render()
export default class ComponentDidMountDemo extends Component<any, ComponentDidMountDemoState> {
  subscriberId: number | null = null;

  state = {
    people: [],
  };

  fetchData(): Promise<Person[]> {
    const url = 'http://localhost:8000/people';
    return fetch(url).then(response => response.json() as Promise<Person[]>);
  }

  // What goes here?
  // Remote data access
  // Subscriptions
  // Anything that requires the DOM to exist
  componentDidMount() {
    // You can call setState() immediately (in general, not applicable here)
    // Which will update the state, requiring another render(), but the previous
    // render() will not be pushed to the DOM (meaning no actual repaint)
    //
    // Be careful about doing this, could cause issues. Better to initialize state
    // in the constructor
    console.log('componentDidMount() runs');
    this.fetchData().then(people => this.setState({ people }));
    this.subscriberId = subscriptionService.subscribe((message: any) =>
      console.log(`componentDidMount(): message received: ${message}`)
    );
  }

  render() {
    console.log('render() runs');
    if (this.state.people.length === 0) {
      return (
        <div className="text-center">
          <h2>componentDidMount() Demo</h2>
          <Spinner size="6x" />
          <br />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h2>componentDidMount() Demo</h2>
          <ul>
            {this.state.people.map((person: Person) => (
              <li key={person.id}>
                {person.firstName} {person.lastName}
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <button
              className="btn btn-primary"
              onClick={() => subscriptionService.unsubscribe(this.subscriberId)}
            >
              Unsubscribe
            </button>
          </div>
        </React.Fragment>
      );
    }
  }
}
