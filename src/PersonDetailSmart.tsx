import React, { Component } from 'react';
import Person from './common/Person';

interface PersonDetailProps {
  person: Person;
}

/*
  This shouldComponentUpdate knows about the data it will render and can do
  a "smart" comparison. 
*/
export default class PersonDetail extends Component<PersonDetailProps> {
  shouldComponentUpdate(nextProps: PersonDetailProps, nextState: any) {
    console.log('PersonDetailSmart.shouldComponentUpdate() ran');
    const person = this.props.person;
    console.log(
      `${person.id} : ${nextProps.person.id} | ${person.version} : ${nextProps.person.version}`
    );

    return !(person.id === nextProps.person.id && person.version === nextProps.person.version);
  }

  render() {
    console.log('PersonDetailSmart.render()');
    const { person } = this.props;
    return (
      <React.Fragment>
        <h2>PersonDetailSmart</h2>
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
