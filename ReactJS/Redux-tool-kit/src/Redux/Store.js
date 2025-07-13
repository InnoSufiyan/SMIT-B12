import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/usersSlice";

export const Store = configureStore({
  reducer: {
    users: usersSlice,
    // jobs: jobsSlice
  }
})