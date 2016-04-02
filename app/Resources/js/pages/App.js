import React, { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import styles from 'css/App.scss';

const App = ({ children }) => (
  <div className={styles.app}>
    <div className="container">
      <div className={styles.nav}>
        <LinkContainer to="/"><Button bsStyle="primary">Index</Button></LinkContainer>
        <LinkContainer to="/page"><Button>Example page</Button></LinkContainer>
      </div>
      <hr />
      {children}
    </div>
  </div>
);
App.propTypes = {
  children: PropTypes.node,
};
export default App;
