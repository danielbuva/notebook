import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import notebook from "./slices/notebook";
import { createAction } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter,
    notebook,
  },
});

export const setInitialData = createAction("SET_INITIAL_DATA");
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
