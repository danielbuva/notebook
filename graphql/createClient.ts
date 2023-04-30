import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const link = createHttpLink({
  uri: "http://localhost:3000/api/graphql",
  credentials: "same-origin",
});

const createApolloClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    ssrMode: true,
    link,
  });
};

export default createApolloClient;
