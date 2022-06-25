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
