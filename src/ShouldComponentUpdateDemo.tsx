import React, { Component } from 'react';
import PersonDetail from './PersonDetail';
import PersonDetailPure from './PersonDetailPure';
import PersonDetailSmart from './PersonDetailSmart';
import Person from './common/Person';

interface ShouldComponentUpdateDemoState {
  person: Person | undefined;
  lastPersonFetchedId: string;
}

export default class ShouldComponentUpdateDemo extends Component<
  any,
  ShouldComponentUpdateDemoState
> {
  constructor(props: any) {
    super(props);
    this.fetchPerson = this.fetchPerson.bind(this);
    this.fetchAnotherPerson = this.fetchAnotherPerson.bind(this);
    this.state = {
      lastPersonFetchedId: '',
      person: undefined,
    };
  }

  fetchPerson(personId?: string) {
    fetch(`http://localhost:8000/people/${personId || this.state.lastPersonFetchedId}`)
      .then(response => response.json())
      .then((person: Person) => {
        console.log('fetched ', person);
        const nextState: any = { person };

        if (personId) {
          nextState.lastPersonFetchedId = personId;
        }
        this.setState(nextState);
      });
  }

  fetchAnotherPerson() {
    if (this.state.lastPersonFetchedId === '201') {
      this.fetchPerson('202');
    } else {
      this.fetchPerson('201');
    }
  }

  componentDidMount() {
    this.fetchPerson('201');
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col text-center">
            <button className="btn btn-primary" onClick={() => this.fetchAnotherPerson()}>
              Fetch another person
            </button>&nbsp;
            <button className="btn btn-danger" onClick={() => this.fetchPerson()}>
              Fetch the same person
            </button>
          </div>
        </div>
        {this.state.person ? (
          <div className="row">
            <div className="col">
              <PersonDetail person={this.state.person} />
            </div>
            <div className="col">
              <PersonDetailPure person={this.state.person} />
            </div>
            <div className="col">
              <PersonDetailSmart person={this.state.person} />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <h3>No one to display, yet.</h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}
