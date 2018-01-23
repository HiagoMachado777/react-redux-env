const initialState = {
  someValue: 0,
  valueToSum: 0,
};

const ExampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_VALUE': {
      const { someValue } = state;
      const newValue = Number(someValue) + 1;
      return { ...state, someValue: newValue };
    }

    case 'SET_VALUE_TO_SUM': {
      const { value } = action;
      const newState = { ...state, valueToSum: value };
      return newState;
    }

    case 'SUM_TO_VALUE': {
      const { someValue, valueToSum } = state;
      const newValue = Number(someValue) + Number(valueToSum);
      return { ...state, someValue: newValue };
    }

    default:
      return state;
  }
};


export default ExampleReducer;

const getValue = state => state.exampleReducer.someValue;
const getValueToSum = state => state.exampleReducer.valueToSum;

export const Selectors = {
  getValue,
  getValueToSum,
};
