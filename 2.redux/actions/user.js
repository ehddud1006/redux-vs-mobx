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

module.exports = {
  login,
  logout,
};
