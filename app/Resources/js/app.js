import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';
import createStore from 'store/createStore';
import routes from 'router/routes';

const basePath = (__GLOBALS__.dev ? '/app_dev.php' : '');
const history = useRouterHistory(createHistory)({
  basename: basePath,
});

const initialState = {};

const store = createStore(initialState, history);
const appHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
