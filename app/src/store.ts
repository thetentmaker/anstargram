import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import feedListReducer, { TypeFeedListReducer } from "./reducers/feedList";
import useInfoReducer, { TypeUserInfoReducer } from "./reducers/useInfo";

const rootReducer = combineReducers({
  feedList: feedListReducer,
  useInfo: useInfoReducer,
});

// export const store = configureStore({
//   reducer: {
//     feedList: feedListReducer,
//     useInfo: useInfoReducer,
//   },
// });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type RootReducer = {
  useInfo: TypeUserInfoReducer;
  feedList: TypeFeedListReducer;
};
