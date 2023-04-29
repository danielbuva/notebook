import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { addNotebook, setTitle, toggle } from "@/redux/slices/notebook";

const Save = () => {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.notebook.title);
  const handleSave = () => {
    dispatch(toggle);
    dispatch(addNotebook(title));
    dispatch(setTitle(""));
  };

  return <button onClick={handleSave}>save</button>;
};

export default Save;
