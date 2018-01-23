import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter as Router } from 'react-router-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Info from 'components/Info';
import Home from 'components/Home';
import Example from 'containers/ExampleContainer';

const Routes = (props) => {
  const { history } = props;

  return (
    <Router key="router" history={history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/info" component={Info} />
        <Route path="/example" component={Example} />
        <Redirect to="/example" />
      </Switch>
    </Router>
  );
};


Routes.defaultProps = {
  history: {},
};

Routes.propTypes = {
  history: PropTypes.shape(),
};

export default Routes;
