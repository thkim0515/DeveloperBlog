import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../_slice/tabSlice";
import unreadMessagesReducer from "../_slice/unreadMessagesSlice";
import createWebSocketMiddleware from "../_actions/websocketMiddleware";

const websocketMiddleware = createWebSocketMiddleware();

const store = configureStore({
  reducer: {
    tab: tabReducer,
    unreadMessages: unreadMessagesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(websocketMiddleware),
});

export default store;
