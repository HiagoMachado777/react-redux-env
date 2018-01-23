import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Selectors } from 'reducers/exampleReducer';
import ExampleComponent from 'components/ExampleComponent';
import ExampleActions from 'actions/exampleActions';

export class ExampleContainer extends React.Component {
  handleIncrement = () => {
    const { dispatch } = this.props;
    dispatch(ExampleActions.incrementValue());
  }

  handleSum = () => {
    const { dispatch, values } = this.props;
    const value = values ? values.valueToSum : 0;
    dispatch(ExampleActions.sumToValue(value));
  }

  handleChangeValueToSum = (event) => {
    const { dispatch } = this.props;
    dispatch(ExampleActions.setValueToSum(event.target.value));
  };

  render() {
    const { value, valueToSum } = this.props;
    const exampleProps = {
      handleIncrement: this.handleIncrement,
      handleSum: this.handleSum,
      handleChangeValueToSum: this.handleChangeValueToSum,
      valueToSum,
      value,
    };

    return <ExampleComponent {...exampleProps} />;
  }
}

ExampleContainer.defaultProps = {

};

ExampleContainer.propTypes = {
};

const mapStateToProps = state => ({
  value: Selectors.getValue(state),
  valueToSum: Selectors.getValueToSum(state),
});

const $connect = connect(mapStateToProps)(ExampleContainer);

export default $connect;
