import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./src/features/taskSlice";

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
