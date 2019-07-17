import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

app.use(cors());

const server = new ApolloServer({
   typeDefs,
    resolvers
});

server.applyMiddleware({app, path: '/profily'});

app.listen({port: process.env.PORT}, () => {
    console.log(`Apollo Server listenning on port : ${process.env.PORT} /profily`);
});
