import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import feedListReducer, { TypeFeedListReducer } from "./reducers/feedList";
import userInfoReducer, { TypeUserInfoReducer } from "./reducers/userInfo";

const rootReducer = combineReducers({
  feedList: feedListReducer,
  userInfo: userInfoReducer,
});

// export const store = configureStore({
//   reducer: {
//     feedList: feedListReducer,
//     useInfo: useInfoReducer,
//   },
// });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootReducer = {
  userInfo: TypeUserInfoReducer;
  feedList: TypeFeedListReducer;
};

export default store;