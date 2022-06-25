const { createStore } = require("redux");

const reducer = () => {};

const initialState = {
  compA: "a",
  compB: "b",
  comC: null,
};
const store = createStore(reducer, initialState);

console.log(store.getState());
