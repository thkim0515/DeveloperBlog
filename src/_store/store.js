// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../_reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  // Add middleware, enhancers, and other store configurations here if needed
});

export default store;
