import React, { Component, ChangeEvent } from 'react';
import PeopleRenderer from './PeopleRendererPure';

export default class ComponentDidUpdateDemo extends Component {
  state = {
    lastName: '',
    searchLastName: '',
  };

  handleFormUpdate = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [target.name]: target.value });
  };

  handleSearch = () => {
    this.setState({searchLastName: this.state.lastName});
  }

  // Operate on the DOM if data updates matter
  // Network requests if new props or state requires it
  // Only receives a snopshot if getSnapshotBeforeUpdate() is implemented
  // Can call setState() immediately, BUT
  //  * Must be wrapped in a conditional
  //  * Will cause a second call to render(), which will be invisible to the user
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    console.log('ComponentDidUpdateDemo.componentDidUpdate() runs');
  }

  render() {
    console.log('ComponentDidUpdateDemo.render() runs');
    return (
      <section>
        <h2>componentDidUpdate() with pure version of PeopleRenderer</h2>
        <div className="form-group">
          <label>Search Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={this.handleFormUpdate}
            value={this.state.lastName}
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