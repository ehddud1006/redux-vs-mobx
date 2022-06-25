import { createSlice } from "@reduxjs/toolkit";

import { LogIn } from "../actions/user";
const initialState = {
  isLoggingIn: true,
  data: null,
};
// const userReducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case "LOG_IN_REQUEST":
//       return {
//         ...prevState,
//         data: null,
//         isLoggingIn: true,
//       };
//     case "LOG_IN_SUCCESS":
//       return {
//         ...prevState,
//         data: action.data,
//         isLoggingIn: false,
//       };
//     case "LOG_IN_FAILURE":
//       return {
//         ...prevState,
//         data: null,
//         isLoggingIn: false,
//       };
//     case "LOG_IN":
//       return {
//         ...prevState,
//         data: action.data,
//       };
//     case "LOG_OUT":
//       return {
//         ...prevState,
//         data: null,
//       };

//     default:
//       return prevState;
//   }
// };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  }, // 동기
  extraReducers: {
    [LogIn.pending](state, action) {
      state.isLoggingIn = true;
    },
    [LogIn.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [LogIn.rejected](state, action) {
      state.data = null;
      state.isLoggingIn = false;
    },
  }, // 비동기
});

export default userSlice.reducer;
