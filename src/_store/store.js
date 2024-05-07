// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../_reducers/rootReducer";
import unreadMessagesReducer from "../_slice/unreadMessagesSlice";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    ...rootReducer,
    unreadMessages: unreadMessagesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
