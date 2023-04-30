import { gql } from "@apollo/client";

export const GetHelloWorld = gql`
  query {
    hello
  }
`;
