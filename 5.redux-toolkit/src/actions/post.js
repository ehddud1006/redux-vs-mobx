const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const addPost = createAsyncThunk("post/add", async (data, thunkAPI) => {
  // isPending, fulfilled, rejected;
  // loading ,   success    failed

  console.log(data);
  // async await 에서는 try catch 로 예외처리를 하는 것이 좋지만
  // createAstncThunk 에서 예외처리를 하게되면 reject 단계로 넘어가지못하므로
  // 예외적으로 try catch를 사용하지 않는다.
  const result = await delay(500, {
    title: "새 게시글",
    content: "내용내용내용",
  });
  return result;
});

module.exports = {
  addPost,
};
