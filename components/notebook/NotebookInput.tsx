import { useAppSelector } from "@/hooks/useRedux";
import Cancel from "./Cancel";
import Save from "./Save";
import styles from "@/lib/styles/root.module.scss";

const NotebookInput = () => {
  const show = useAppSelector((state) => state.notebook.show);
  if (!show) return null;
  return (
    <div className={styles.App}>
      <input />
      <Cancel />
      <Save />
    </div>
  );
};

export default NotebookInput;
