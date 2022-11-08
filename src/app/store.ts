import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "../features/Cake/cakeSlice";
import TodoReducer from "../features/Todo/todoSlice"

export const Store = configureStore({
  reducer: {
    cake: CakeReducer,
    Todo: TodoReducer
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
