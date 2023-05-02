import { gql } from "@apollo/client";

export const GetNotebooks = gql`
  query User($name: String!) {
    user(name: $name) {
      notebook
    }
  }
`;
