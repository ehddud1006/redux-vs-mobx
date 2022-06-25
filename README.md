# redux-vs-mobx

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
