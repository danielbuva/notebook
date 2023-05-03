import { toggle } from "@/redux/slices/notebook";
import { useAppDispatch } from "@/hooks/useRedux";

const AddNotebook = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(toggle)}>add notebook</button>;
};

export default AddNotebook;
