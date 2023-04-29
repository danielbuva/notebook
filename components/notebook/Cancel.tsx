import { useAppDispatch } from "@/hooks/useRedux";
import { toggle } from "@/redux/slices/notebook";

const Cancel = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(toggle);
  };
  
  return <button onClick={handleClose}>cancel</button>;
};

export default Cancel;
