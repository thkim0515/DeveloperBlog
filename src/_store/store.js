import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../_reducers/rootReducer";
import createWebSocketMiddleware from "../_actions/websocketMiddleware";

const websocketMiddleware = createWebSocketMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(websocketMiddleware),
});

export default store;
