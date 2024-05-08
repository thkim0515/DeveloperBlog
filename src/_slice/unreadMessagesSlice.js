import { createSlice } from "@reduxjs/toolkit";

export const unreadMessagesSlice = createSlice({
  name: "unreadMessages",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      // console.log("증가");
    },
    reset: (state) => {
      state.value = 0;
      // console.log("리셋");
    },
    setUnreadMessages: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, reset, setUnreadMessages } =
  unreadMessagesSlice.actions;

export default unreadMessagesSlice.reducer;
