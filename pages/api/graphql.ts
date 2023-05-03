import prisma from "@/prisma/prisma";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import context from "@/graphql/context";
import { MyContext } from "@/lib/types/auth";

type AddNotebookArgs = {
  title: string;
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
      return `heyo: ${contextValue.id}`;
    },
    notebook: async (_: any, __: any, contextValue: MyContext) => {
      return await prisma.user.findUnique({
        select: { Notebook: true },
        where: { id: contextValue.id },
      });
    },
    addNotebook: async (
      _: any,
      args: AddNotebookArgs,
      contextValue: MyContext
    ) => {
      return await prisma.notebook.create({
        data: {
          title: args.title,
          authorId: contextValue.id,
        },
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
