import { createStore } from "redux";
//Action Constants
const INCREMENT_BY_ONE = "INCREMENT_BY_ONE";
const DECREMENT_BY_ONE = "DECREMENT_BY_ONE";

const INCREMENT_BY_THREE = "INCREMENT_BY_THREE";
const DECREMENT_BY_TWO = "DECREMENT_BY_TWO";

const INCREMENT_BY_FIVE = "INCREMENT_BY_FIVE";
const DECREMENT_BY_THREE = "DECREMENT_BY_THREE";

const RESET = "RESET";

//Initial State
const initialSate = {
  value: 0,
  value2: 0,
  value3: 0,
};

//Reducer
const counterReducer = (state = initialSate, action) => {
  if (action.type === INCREMENT_BY_ONE) {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === DECREMENT_BY_ONE && state.value > 0) {
    return {
      ...state,
      value: state.value - 1,
    };
  } else if (action.type === INCREMENT_BY_THREE) {
    return {
      ...state,
      value2: state.value2 + 3,
    };
  }
  else if (action.type === DECREMENT_BY_TWO && state.value2 > 2) {
    return {
      ...state,
      value2: state.value2 - 2,
    };
  }
  else if (action.type === INCREMENT_BY_FIVE) {
    return {
      ...state,
      value3: state.value3 + 5,
    };
  }
  else if (action.type === DECREMENT_BY_THREE && state.value3 > 3) {
    return {
      ...state,
      value3: state.value3 - 3,
    };
  }
  else if (action.type === RESET) {
    console.log("Reset Clicked")
    return {
      value: 0
    };
  }
  
};

//create store
const store = createStore(counterReducer);

export default store;
