import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import Index from 'pages/Index';
import Page from 'pages/Page';
import RouteNotFound from 'pages/RouteNotFound';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'store/reducers';
import { createHistory } from 'history';

const basePath = (__GLOBALS__.dev ? '/app_dev.php' : '');

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(
  reducer
);

const browserHistory = useRouterHistory(createHistory)({
  basename: basePath,
});

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="page" component={Page} />
        <Route path="404" component={RouteNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
