import { useAppDispatch } from "@/hooks/useRedux";
import { toggle } from "@/redux/slices/notebook";

const Save = () => {
  const dispatch = useAppDispatch();
  const handleSave = () => {
    dispatch(toggle);
  };
  
  return <button onClick={handleSave}>save</button>;
};

export default Save;
