import { useRouter } from "next/router";

const Notebook = () => {
  const router = useRouter();
  const notebook = router.query.notebook;
  return <>notebook route {notebook}</>;
};

export default Notebook;
