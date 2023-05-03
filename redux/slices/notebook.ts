import { GetNotebooks } from "@/graphql/queries/notebook";
import { useQuery } from "@apollo/client";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { setInitialData } from "../store";
import { Notebook } from "@/lib/types/notebook";

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
    setInitialData: (state, action: PayloadAction<[]>) => {
      state.notebooks = action.payload;
    },
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
