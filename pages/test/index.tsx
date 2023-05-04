import { SayHello } from "@/graphql/mutations/sayhello";
import { GetHelloWorld } from "@/graphql/queries/hello";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const Test = () => {
  const [text, setText] = useState("");
  const [sayHelloFn, { data }] = useMutation(SayHello);
  const yo = useQuery(GetHelloWorld);
  const handleHello = () => {
    console.log("yo: ", yo.data);
  };
  return (
    <>
      <div>test route</div>
      <button onClick={handleHello}>hello</button>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />
      <button
        onClick={() => {
          sayHelloFn({ variables: { text } });
        }}
      >
        say hello
      </button>
      {data && <p>{data.sayhello}</p>}
    </>
  );
};

export default Test;
