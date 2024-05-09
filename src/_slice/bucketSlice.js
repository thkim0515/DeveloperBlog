import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bucketUrl: "https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/",
};

export const bucketUrl = createSlice({
  name: "butketUrl",
  initialState,
  reducers: {
    setBucketUrl: (state, action) => {
      state.bucketUrl = action.payload;
    },
  },
});

export const { setBucketUrl } = bucketUrl.actions;

export default bucketUrl.reducer;
