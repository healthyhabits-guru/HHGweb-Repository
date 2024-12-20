import { configureStore } from "@reduxjs/toolkit";
import { hhgSlice } from "./hhgSlice";

export const store = configureStore({
  reducer: {
    hhg: hhgSlice.reducer
  },
});
