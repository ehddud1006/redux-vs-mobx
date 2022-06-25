import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const reducer = require("./reducers/reducer");

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("액션로깅", action);
  //dispatch 하기전

  dispatch(action); //기본기능

  //dispatch 한 후
  //   console.log("액션끝", action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware], // firestMiddleware를 추가하고 기본 미들웨어를 유지하기위해 스프레드 연산자를 사용함.
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
