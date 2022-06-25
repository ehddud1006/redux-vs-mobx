const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        compA: action.data,
        compB: 12,
        compC: null,
      };
  }
};

const initialState = {
  compA: "a",
  compB: "b",
  comC: null,
};

const nextState = {
  ...initialState,
  compA: action.data,
};

const store = createStore(reducer, initialState);

console.log(store.getState());

// action
const changeCompA = (data) => {
  return {
    // action
    type: "CHANGE_COMP_A",
    data,
  };
};

store.dispatch(changeCompA("b"));
