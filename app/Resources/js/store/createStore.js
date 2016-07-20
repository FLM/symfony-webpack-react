import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from 'store/reducers';

/* eslint-disable global-require */
export default (initialState = {}, history) => {
  const middlewares = [routerMiddleware(history)];

  if (__GLOBALS__.dev) {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  const storeEnhancers = [];
  storeEnhancers.push(applyMiddleware(...middlewares));

  const finalCreateStore = compose(...storeEnhancers)(createStore);

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  });

  return finalCreateStore(reducer, initialState);
};
