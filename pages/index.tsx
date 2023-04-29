import Layout from "@/components/Layout";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <h1>hello</h1>
      <ul>
        <li>
          <Link href="/notebooks">notebooks</Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
