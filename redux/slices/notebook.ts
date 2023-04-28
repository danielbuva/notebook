import { createSlice } from "@reduxjs/toolkit";

type NotebookState = {
  show: boolean;
};

const initialState: NotebookState = { show: false };

const notebookSlice = createSlice({
  name: "notebook",
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});

export const { toggle } = notebookSlice.actions;
export default notebookSlice.reducer;
