import React, { Component } from 'react';
import Person from './common/Person';

interface PersonDetailProps {
  person: Person;
}

/*
  shouldComponentUpdate is a dummy in this case, meant to indicate when it runs
  Nothing more
*/

export default class PersonDetail extends Component<PersonDetailProps> {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log('PersonDetail.shouldComponentUpdate() ran.');
    return true;
  }

  render() {
    console.log('PersonDetail.render()');
    const { person } = this.props;
    return (
      <React.Fragment>
        <h2>PersonDetail</h2>
        <div className="card">
          <div className="card-header">
            <h3>
              {person.firstName} {person.lastName}
            </h3>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Address: {person.address.street}</li>
            <li className="list-group-item">
              {person.address.city}, {person.address.state}
            </li>
            <li className="list-group-item">DOB: {person.dateOfBirth}</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
