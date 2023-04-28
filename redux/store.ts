import { configureStore, combineReducers } from "@reduxjs/toolkit";
import modalReducer from "../components/Modal/ModalSlice";
import calendarReducer from "./../components/Calendar/calendarSlice";
import outagesReducer from "./../redux/outagesSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  calendar: calendarReducer,
  outages: outagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
