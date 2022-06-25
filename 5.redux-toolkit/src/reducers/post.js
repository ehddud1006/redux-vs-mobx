import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "../actions/post";
// const postReducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case "ADD_POST":
//       return [...prevState, action.data];
//     default:
//       return prevState;
//   }
// };

const initialState = {
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {}, // 동기
  extraReducers: {
    [addPost.pending](state, action) {},
    [addPost.fulfilled](state, action) {},
    [addPost.rejected](state, action) {},
  }, // 비동기
});

module.exports = postSlice;
