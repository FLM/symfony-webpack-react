import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    const { children } = this.props;

    return (
      <div className="app">
        <ul className="nav nav-tabs">
          <Link to="/">Index</Link>
          <Link to="page">Example page</Link>
        </ul>
        <div className="container">
          {children}
        </div>
      </div>
    );
  }
}
