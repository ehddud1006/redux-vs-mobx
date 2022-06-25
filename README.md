# redux-vs-mobx

### Redux 구조

<img width="687" alt="스크린샷 2022-06-25 오후 6 26 52" src="https://user-images.githubusercontent.com/62373865/175767490-5fa508a7-ff55-47d7-8dbc-41324bb6e5b8.png">

### 중복제거

```javascript
const initialState = {
  compA: "a",
  compB: "b",
  comC: null,
};

const nextState = {
  ...initialState,
  compA: action.data,
};
```

### state 변경

```javascript
const initialState = {
  user: null,
  posts: [],
};

const nextState = {
  ...initialState,
  posts: [action.data],
};

const nextnextState = {
  ...initialState,
  posts: [...initialState.posts, action.data],
};
```

### module.exports

```javascript
module.exports = {
  logIn,
  logOut,
  addPost,
};
```
