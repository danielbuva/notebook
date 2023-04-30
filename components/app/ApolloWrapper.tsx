import { Wrapper } from "@/lib/types/notebook";
import { ApolloProvider, gql } from "@apollo/client";
import createClient from "@/graphql/createClient";
import { useRef } from "react";

const ApolloWrapper = ({ children }: Wrapper) => {
  const client = useRef(createClient()).current;
  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
