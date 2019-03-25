import React, {Component} from 'react';
import Person from './common/Person';
import Spinner from './Spinner';

interface PeopleRendererProps {
  lastName: string;
}

interface PeopleRendererState {
  people: Person[];
}

export default class PeopleRenderer extends Component<PeopleRendererProps, PeopleRendererState> {
  state = {
    people: [],
  };

  componentDidUpdate(prevProps: PeopleRendererProps) {
    console.log(`PeopleRenderer.componentDidUpdate(), new lastName: ${this.props.lastName}`);
    if (this.props.lastName !== prevProps.lastName) {
      console.log('PeopleRenderer fetching....')
      fetch(`http://localhost:8000/people?lastName_like=${this.props.lastName}`)
        .then(response => response.json())
        .then(people => this.setState({ people }));
    }
  }

  render() {
    console.log('PeopleRenderer.render()');

    if (this.state.people.length === 0) {
      return <Spinner size="4x" />;
    } else {
      return (
        <ul>
          {this.state.people.map((person: Person) => (
            <li key={person.id}>
              {person.firstName} {person.lastName}
            </li>
          ))}
        </ul>
      );
    }
  }
}
