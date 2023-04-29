import { toggle } from "@/redux/slices/notebook";
import NotebookInput from "./NotebookInput";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";

const AddNotebook = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(toggle)}>add notebook</button>;
};

export default AddNotebook;

/*
- click add notebook button
- opens input to name the notebook, has cancel and save buttons
- save/cancel both close input, save adds a notebook to front page -> saves in our db
*/
