import { combineReducers } from "redux";
import tabReducer from "../_slice/tabSlice";
import unreadMessagesReducer from "../_slice/unreadMessagesSlice";
import bucketUrlReducer from "../_slice/bucketSlice";

const rootReducer = combineReducers({
  tab: tabReducer,
  unreadMessages: unreadMessagesReducer,
  bucketUrl: bucketUrlReducer,
});

export default rootReducer;
