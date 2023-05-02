import prisma from "@/prisma/prisma";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import context from "@/graphql/context";
import type { NextApiRequest, NextApiResponse } from "next";

export type MyContext = {
  name: string;
  req: NextApiRequest;
  res: NextApiResponse;
};

const typeDefs = `#graphql
type Query {
  hello: String
  notebook: Notebook
}

type User {
  id: ID!
  name: String!
  notebook: [Notebook]!
}

type Notebook {
  title: String!
  note: [Note]!
}
    
type Note {
  content: String
}
`;
const resolvers = {
  Query: {
    hello: (_: any, __: any, contextValue: MyContext) => {
      return `heyo: ${contextValue.name}`;
    },
    notebook: async (_: any, __: any, contextValue: MyContext) => {
      return await prisma.user.findUnique({
        select: { Notebook: true },
        where: { name: contextValue.name },
      });
    },
  },
};

const server = new ApolloServer<MyContext>({
  resolvers,
  typeDefs,
  csrfPrevention: true,
});

export default startServerAndCreateNextHandler(server, {
  context,
});
