import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import combineReducers from './reducers';

const browserHistory = createBrowserHistory();

const configureStore = preloadedState => createStore(
  combineReducers, preloadedState,
  compose(applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
    createLogger(),
  )),
); // it's recommended to remove createLogger() in the production environment


export default configureStore;
