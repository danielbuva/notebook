import Link from "next/link";

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/notebooks">notebooks</Link>
      </li>
      <li>
        <Link href="/test">test</Link>
      </li>
    </ul>
  );
};

export default Home;
