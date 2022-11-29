import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from "./src/features/balanceSlice";

export default configureStore({
  reducer: {
    balance: balanceReducer,
  },
});
