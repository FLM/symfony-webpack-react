import React from 'react';
import myHistory from 'router/myHistory';
import store from 'store/store';
import { push } from 'react-router-redux';

export default () => (
  <div>
    <h1>Index</h1>

    {/* This is for demo purposes only. This project uses react-router-redux, so you should use the push function from react-router-redux instead. */}
    <div><a href="#" onClick={() => myHistory.push('/page')}>Navigate using react-router</a></div>

    {/* The correct way of accessing dispatch is via this.props.dispatch in Redux connected React components */}
    <div><a href="#" onClick={() => store.dispatch(push('/page'))}>Navigate using react-redux-router</a></div>
  </div>

);
