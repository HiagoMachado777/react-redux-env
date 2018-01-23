/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import Routes from 'Routes';
import createStore from 'store';

const history = createBrowserHistory();

const store = createStore();

const appElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  appElement,
);
