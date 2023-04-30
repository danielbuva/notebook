import { GetHelloWorld } from "@/graphql/queries/hello";
import { useQuery } from "@apollo/client";

const Test = () => {
  const yo = useQuery(GetHelloWorld);
  const handleHello = () => {
    console.log("yo: ", yo.data);
  };
  return (
    <>
      <div>test route</div>
      <button onClick={handleHello}>hello</button>
    </>
  );
};

export default Test;
