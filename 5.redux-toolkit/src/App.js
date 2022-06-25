import "./App.css";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logout } from "./actions/user";
import userSlice from "./reducers/user";
function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: "zerocho",
        password: "비밀번호",
      })
    );
  }, []);
  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logout());
  }, []);
  return (
    <div className="App">
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        "로그인 해주세요"
      )}
      <button onClick={onClick}>LoGIN</button>
      <button onClick={onLogOut}>Logout</button>
    </div>
  );
}

export default App;
