import express from 'express';
import graphqlHttp from 'express-graphql';
import schema from './schema';
const app = express();
const port = 3000;

app.use(graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(port, () => console.log(`GraphQL server running at http://localhost:${port}`));