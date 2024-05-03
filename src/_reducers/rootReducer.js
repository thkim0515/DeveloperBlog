// rootReducer.js
import { combineReducers } from "redux";
import projectReducer from "../_slice/projectSlice";

const rootReducer = combineReducers({
  project: projectReducer,
  // Add more reducers here if you have additional slices of state
});

export default rootReducer;
