import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoReducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
