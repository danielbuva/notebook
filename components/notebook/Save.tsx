import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addNotebook, setTitle, toggle } from "@/redux/slices/notebook";
import { useMutation } from "@apollo/client";
import { AddNotebook } from "@/graphql/mutations/notebook";

const Save = () => {
  const [addNotebookFn] = useMutation(AddNotebook);
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.notebook.title);
  const handleSave = () => {
    addNotebookFn({ variables: { title } });
    dispatch(toggle);
    // dispatch(addNotebook(title));
    dispatch(setTitle(""));
  };

  return <button onClick={handleSave}>save</button>;
};

export default Save;
