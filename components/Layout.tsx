import styles from "@/lib/styles/Home.module.css";
import { Wrapper } from "@/lib/types/notebook";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: Wrapper) => {
  return (
    <main className={`${styles.main} ${inter.className}`}>{children}</main>
  );
};

export default Layout;
