import React, { Component, PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import styles from 'style/App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  render() {
    const { children } = this.props;

    return (
      <div className={styles.app}>
        <div className="container">
          <div className={styles.nav}>
            <LinkContainer to="/"><Button bsStyle="primary">Index</Button></LinkContainer>
            <LinkContainer to="page"><Button>Example page</Button></LinkContainer>
          </div>
          <hr />
          {children}
        </div>
      </div>
    );
  }
}
