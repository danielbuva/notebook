import { gql } from "@apollo/client";

export const AddNotebook = gql`
  mutation AddNotebook($title: String!) {
    addNotebook(title: $title)
  }
`;
