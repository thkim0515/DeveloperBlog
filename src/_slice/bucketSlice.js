import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageUrl: "https://d3kcrktwedekfj.cloudfront.net/",
};

export const bucketUrlSlice = createSlice({
  name: "bucketUrl",
  initialState,
  reducers: {
    setBucketUrlUrl: (state, action) => {
      state.bucketUrlUrl = action.payload;
    },
  },
});

export const { setBucketUrlUrl } = bucketUrlSlice.actions;

export default bucketUrlSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // 비동기적으로 bucket URL을 가져오는 thunk action
// export const fetchBucketUrl = createAsyncThunk("bucket/fetchUrl", async () => {
//   const response = await axios.get("/awss3/getbucket");
//   console.log(response);
//   return response.data; // API 응답에서 URL 추출
// });

// const bucketSlice = createSlice({
//   name: "bucket",
//   initialState: {
//     bucketUrl: "",
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setBucketUrl: (state, action) => {
//       state.bucketUrl = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBucketUrl.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchBucketUrl.fulfilled, (state, action) => {
//         state.bucketUrl = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchBucketUrl.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setBucketUrl } = bucketSlice.actions;
// export default bucketSlice.reducer;
