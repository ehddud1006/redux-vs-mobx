const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers/reducer");
const { login, logout, logIn } = require("./actions/user");
const { addPost } = require("./actions/post");
const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
  commnets: [],
  history: [],
  likes: [],
  followers: [],
};

// const nextState = {
//   ...initialState,
//   posts: [action.data],
// };

// const nextnextState = {
//   ...initialState,
//   posts: [...initialState.posts, action.data],
// };

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션로깅", action);
  //dispatch 하기전

  dispatch(action); //기본기능

  //dispatch 한 후
  //   console.log("액션끝", action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    //비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action); // 리턴은 있어도 되고 없어도 된다.
};

const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
