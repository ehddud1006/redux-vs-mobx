const { createStore, compose, applyMiddleware } = require("redux");
const reducer = require("./reducers/reducer");
const { login, logout } = require("./actions/user");
const { addPost } = require("./actions/post");
const initialState = {
  user: {
    isLoggingIn: true,
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
  console.log("액션끝", action);
};

const enhancer = compose(applyMiddleware(firstMiddleware));

const store = createStore(reducer, initialState, enhancer);
store.subscribe(() => {
  console.log("changed");
});

console.log("1th", store.getState());

store.dispatch(
  login({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

console.log("2nd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);

console.log("3rd", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "안녕하세요. 리덕스",
  })
);

console.log("4th", store.getState());

store.dispatch(logout());

console.log("5th", store.getState());
