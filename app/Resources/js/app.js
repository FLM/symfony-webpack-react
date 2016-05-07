import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store from 'store/store';
import myHistory from 'router/myHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import Index from 'pages/Index';
import Page from 'pages/Page';
import RouteNotFound from 'pages/RouteNotFound';

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(myHistory, store)}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="page" component={Page} />
        <Route path="404" component={RouteNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
