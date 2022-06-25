const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compA: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: "b",
  comC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});

// action
const changeCompA = (data) => {
  return {
    // action
    type: "CHANGE_COMP_A",
    data,
  };
};

console.log(store.getState());
store.dispatch(changeCompA("b"));
console.log(store.getState());
