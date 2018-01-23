import React from 'react';
import PropTypes from 'prop-types';

const ExampleComponent = (props) => {
  const {
    handleIncrement,
    handleSum,
    handleChangeValueToSum,
    valueToSum,
    value,
  } = props;
  return (
    <div>
      <h1>Value: {value}</h1>
      <form >
        <div>
          <label htmlFor="valueToSum">Value to sum:</label>
          <input name="valueToSum" value={valueToSum} onChange={handleChangeValueToSum} min="0" type="number" />
        </div>
      </form>
      <button onClick={handleSum}>Sum to value</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

ExampleComponent.defaultProps = {
  valueToSum: 0,
};

ExampleComponent.PropTypes = {

};

export default ExampleComponent;
