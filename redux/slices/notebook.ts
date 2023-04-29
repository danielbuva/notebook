import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Notebook = {
  title: string;
  content: string | null;
};

type NotebookState = {
  show: boolean;
  notebooks: Notebook[];
  title: string;
};

const initialState: NotebookState = {
  show: false,
  notebooks: [],
  title: "",
};

const notebookSlice = createSlice({
  name: "notebook",
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
    addNotebook: (state, action: PayloadAction<string>) => {
      state.notebooks.push({ title: action.payload, content: null });
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const toggle = notebookSlice.actions.toggle();
export const { addNotebook, setTitle } = notebookSlice.actions;
export default notebookSlice.reducer;
