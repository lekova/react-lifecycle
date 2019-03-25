import React, { Component, ChangeEvent } from 'react';
import PeopleRenderer from './PeopleRenderer';

export default class ComponentDidUpdateUncontrolled extends Component {
  state = {
    searchLastName: '',
  };

  input = React.createRef<HTMLInputElement>();

  handleSearch = () => {
    this.setState({ searchLastName: this.input.current && this.input.current.value });
  };

  // Operate on the DOM if data updates matter
  // Network requests if new props or state requires it
  // Only receives a snopshot if getSnapshotBeforeUpdate() is implemented
  // Can call setState() immediately, BUT
  //  * Must be wrapped in a conditional
  //  * Will cause a second call to render(), which will be invisible to the user
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log('ComponentDidUpdateUncontrolled.componentDidUpdate() runs');
  }

  render() {
    console.log('ComponentDidUpdateUncontrolled.render() runs');
    return (
      <section>
        <h2>componentDidUpdate() demo with uncontrolled text box</h2>
        <div className="form-group">
          <label>Search Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            ref={this.input}
          />
          <button className="btn btn-primary" type="button" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <div>
          <PeopleRenderer lastName={this.state.searchLastName} />
        </div>
      </section>
    );
  }
}
