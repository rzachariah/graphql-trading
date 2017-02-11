import express from 'express';
import graphqlHttp from 'express-graphql';
import cors from "cors";
import schema from './schema/root';
const app = express();
const port = 3000;

app.use(cors());

app.use(graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(port, () => console.log(`GraphQL server running at http://localhost:${port}`));