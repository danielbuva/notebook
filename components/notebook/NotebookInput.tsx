import Cancel from "./Cancel";
import Save from "./Save";
import styles from "@/styles/root.module.scss";

const NotebookInput = () => {
  return (
    <div className={styles.App}>
      <input />
      <Cancel />
      <Save />
    </div>
  );
};

export default NotebookInput;
