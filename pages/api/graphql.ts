import prisma from "@/prisma/prisma";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import context from "@/graphql/context";
import { MyContext } from "@/lib/types/auth";

type AddNotebookArgs = {
  title: string;
};

const typeDefs = `#graphql
schema {
  query: Query
  mutation: Mutation
}

type Query {
  hello: String
  notebook: Notebook
  GetNotebooks(name: String!): [Notebook]!
}

type Mutation {
  addNotebook(name: String!): Notebook!
  sayHello(text: String!): String!
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
  },
  Mutation: {
    sayHello: (
      _: any,
      args: { text: string },
      contextValue: MyContext
    ) => {
      console.log("ARGS FROM SAYHELLO: ", args);
      return args.text + "hello";
    },
    addNotebook: async (
      _: any,
      args: AddNotebookArgs,
      contextValue: MyContext
    ) => {
      const notebook = await prisma.notebook.create({
        data: {
          title: args.title,
          authorId: contextValue.id,
        },
      });
      console.log({ notebook, args, contextValue });
      return notebook;
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
