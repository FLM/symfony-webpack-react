import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import Index from 'pages/Index';
import Page from 'pages/Page';
import RouteNotFound from 'pages/RouteNotFound';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import reducers from 'store/reducers';
import { createHistory } from 'history';

const basePath = (__GLOBALS__.dev ? '/app_dev.php' : '');

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

const browserHistory = useRouterHistory(createHistory)({
  basename: basePath,
});

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="page" component={Page} />
        <Route path="404" component={RouteNotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
