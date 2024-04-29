// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import projectSlice from "../_slice/projectSlice";

const rootReducer = combineReducers({
  posts: projectSlice,
  // Add other reducers here if needed
});

export default rootReducer;
