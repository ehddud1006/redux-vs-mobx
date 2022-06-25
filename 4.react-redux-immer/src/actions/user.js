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

module.exports = {
  login,
  logout,
  logIn,
};
