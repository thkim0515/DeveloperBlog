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
