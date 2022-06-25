const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

// const nextState = {
//   ...initialState,
//   posts: [action.data],
// };

// const nextnextState = {
//   ...initialState,
//   posts: [...initialState.posts, action.data],
// };

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log("changed");
});

// action
const login = (data) => {
  return {
    // action
    type: "LOG_IN",
    data,
  };
};

const logout = () => {
  return {
    // action
    type: "LOG_OUT",
  };
};
const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

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

store.dispatch(logout());

console.log("4th", store.getState());
