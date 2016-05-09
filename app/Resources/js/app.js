import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import createStore from 'store/createStore';
import App from 'pages/App';
import Index from 'pages/Index';
import Page from 'pages/Page';
import RouteNotFound from 'pages/RouteNotFound';

const basePath = (__GLOBALS__.dev ? '/app_dev.php' : '');
const history = useRouterHistory(createHistory)({
  basename: basePath,
});

const initialState = {};

const store = createStore(initialState, history);
const appHistory = syncHistoryWithStore(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="page" component={Page} />
        <Route path="404" component={RouteNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
