import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import notebook from "./slices/notebook";

const store = configureStore({
  reducer: {
    counter,
    notebook,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
