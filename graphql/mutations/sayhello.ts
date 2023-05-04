import { gql } from "@apollo/client";

export const SayHello = gql`
  mutation SayHello($text: String!) {
    sayHello(text: $text)
  }
`;
