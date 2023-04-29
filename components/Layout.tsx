import styles from "@/lib/styles/root.module.scss";
import { Wrapper } from "@/lib/types/notebook";

const Layout = ({ children }: Wrapper) => {
  return <main className={styles.main}>{children}</main>;
};

export default Layout;
