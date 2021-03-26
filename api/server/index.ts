import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import createSchema from '../schema';
import createSession from '../session';

import './env';
import 'reflect-metadata';

const port = process.env.PORT || 8000;

async function createServer() {
  try {
    // 1. create mongoose connection
    await createSession();
    // 2. create express server
    const app = express();

    // allow CORS from client app
    const corsOptions = {
      origin: "http://localhost:3000",
      credentials: true,
    };
    app.use(cors(corsOptions));

    // allow JSON requests
    app.use(express.json());

    const schema = await createSchema();

    // 3. create GraphQL server
    const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      introspection: true,
      // enable GraphQL Playground with credentials
      playground: {
        settings: {
          "request.credentials": "include",
        },
      },
    });

    apolloServer.applyMiddleware({ app, cors: corsOptions });

    // start the server
    app.listen({ port }, () => {
      console.log(
        `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

createServer();
