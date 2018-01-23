const incrementValue = () => ({
  type: 'INCREMENT_VALUE',
});

const sumToValue = () => ({
  type: 'SUM_TO_VALUE',
});

const setValueToSum = value => ({
  type: 'SET_VALUE_TO_SUM',
  value,
});

export default {
  incrementValue,
  sumToValue,
  setValueToSum,
};
