import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import Cancel from "./Cancel";
import Save from "./Save";
import styles from "@/lib/styles/root.module.scss";
import { addNotebook, setTitle, toggle } from "@/redux/slices/notebook";
import type { ChangeEvent, KeyboardEvent } from "react";

const NotebookInput = () => {
  const dispatch = useAppDispatch();

  const title = useAppSelector((state) => state.notebook.title);
  const show = useAppSelector((state) => state.notebook.show);
  if (!show) return null;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitle(e.target.value));
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title.trim() !== "") {
      dispatch(toggle);
      dispatch(addNotebook(title));
      dispatch(setTitle(""));
    }
  };

  return (
    <div className={styles.App}>
      <input onChange={handleInput} onKeyDown={handleEnter} />
      <Save />
      <Cancel />
    </div>
  );
};

export default NotebookInput;
