import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ConstructorDemo from './ConstructorDemo';
import ClassWithoutConstructor from './ClassWithoutConstructor';
import BasicComponent from './BasicComponent';
import ComponentDidMountDemo from './ComponentDidMountDemo';
import ComponentDidUpdateDemo from './ComponentDidUpdateDemo';
import ComponentDidUpdateUncontrolled from './ComponentDidUpdateUncontrolled';
import ComponentDidUpdatePure from './ComponentDidUpdatePure';
import ComponentWillUnmountDemo from './ComponentWillUnmountDemo';
import ShouldComponentUpdateDemo from './ShouldComponentUpdateDemo';
import GetDerivedStateFromPropsDemo from './GetDerivedStateFromPropsDemo';
import ErrorBoundaryDemo from './ErrorBoundaryDemo';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="container-fluid">
          <header className="mb-2">
            <h1>Vistaprint React Lifecycle Demos</h1>
            <hr />
            <nav className="navbar navbar-expand-lg bg-primary text-white">
              <a className="navbar-brand">Demos</a>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a>Constructor</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <div className="row">
            <div className="col-4">
              <ul className="list-unstyled">
                <li><Link to="/constructor-demo">Constructor Demo</Link></li>
                <li><Link to="/class-without-constructor">Class Without Constructor</Link></li>
                <li><Link to="/component-did-mount">componentDidMount() Demo</Link></li>
                <li><Link to="/component-did-update">componentDidUpdate() Demo</Link></li>
                <li><Link to="/component-did-update-uncontrolled">componentDidUpdate() uncontrolled Demo</Link></li>
                <li><Link to="/component-did-update-pure">componentDidUpdate() PureComponent Demo</Link></li>
                <li><Link to="/component-will-unmount">componentWillUnmount() Demo</Link></li>
                <li><Link to="/should-component-update">shouldComponentUpdate() Demo</Link></li>
                <li><Link to="/gdsfp">getDerivedStateFromProps() Demo</Link></li>
                <li><Link to="/error-boundaries">Error Boundaries Demo</Link></li>
              </ul>
            </div>
            <div className="col">
              <Route path="/constructor-demo" component={ConstructorDemo} />
              <Route path="/class-without-constructor" component={ClassWithoutConstructor} />
              <Route path="/component-did-mount" component={ComponentDidMountDemo} />
              <Route path="/component-did-update" component={ComponentDidUpdateDemo} />
              <Route path="/component-did-update-uncontrolled" component={ComponentDidUpdateUncontrolled} />
              <Route path="/component-will-unmount" component={ComponentWillUnmountDemo} />
              <Route path="/should-component-update" component={ShouldComponentUpdateDemo} />
              <Route path="/gdsfp" component={GetDerivedStateFromPropsDemo} />
              <Route path="/error-boundaries" component={ErrorBoundaryDemo} />
            </div>
          </div>
        </main>
      </Router>
    );
  }
}

export default App;
