import React, { PureComponent } from 'react';
import Person from './common/Person';

interface PersonDetailProps {
  person: Person;
}

/*
  Can't override shouldComponentUpdate here, because we want to rely on the
  pure behavior of PureComponent
*/
export default class PersonDetail extends PureComponent<PersonDetailProps> {
  render() {
    console.log('PersonDetailPure.render()');
    const { person } = this.props;
    return (
      <React.Fragment>
        <h2>PersonDetailPure</h2>
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
