import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: "myCode",
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    selectTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export const { selectTab } = tabSlice.actions;
export default tabSlice.reducer;
