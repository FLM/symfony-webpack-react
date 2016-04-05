import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducers from 'store/reducers';

const middlewares = [];
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

const store = finalCreateStore(
  reducer
);

export default store;
