import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../_reducers/rootReducer"; // 여러 리듀서를 합치는 루트 리듀서

const store = configureStore({
  reducer: rootReducer,
});

export default store;
