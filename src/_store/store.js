// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../_reducers/rootReducer";
import unreadMessagesReducer from "../_slice/unreadMessagesSlice";
import createWebSocketMiddleware from "../_slice/websocketMiddleware";
import logger from "redux-logger";

const websocketMiddleware = createWebSocketMiddleware();

const store = configureStore({
  reducer: {
    ...rootReducer,
    unreadMessages: unreadMessagesReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketMiddleware), //, logger),
});

export default store;
