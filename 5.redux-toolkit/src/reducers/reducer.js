import userSlice from "./user";

const { combineReducers } = require("redux");

// const userSlice = require("./user");
const postSlice = require("./post");

module.exports = combineReducers({
  user: userSlice,
  posts: postSlice.reducer,
});
// module.exports = reducer;
