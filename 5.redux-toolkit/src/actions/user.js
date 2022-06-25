import { createAsyncThunk, isPending } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const LogIn = createAsyncThunk("user/LogIn", async (data, thunkAPI) => {
  // isPending, fulfilled, rejected;
  // loading ,   success    failed

  console.log(data);
  // async await 에서는 try catch 로 예외처리를 하는 것이 좋지만
  // createAstncThunk 에서 예외처리를 하게되면 reject 단계로 넘어가지못하므로
  // 예외적으로 try catch를 사용하지 않는다.
  const result = await delay(500, {
    userId: 1,
    nickname: "zerocho",
  });
  return result;
});
const logIn = (data) => {
  //async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: "zerocho",
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};

// action creator
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

// module.exports = {
//   login,
//   logout,
//   logIn,
//   LogIn,
// };

export { login, logout, logIn, LogIn };
