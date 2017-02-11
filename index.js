import express from 'express';
import graphqlHttp from 'express-graphql';
import { SubscriptionManager } from 'graphql-subscriptions';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import cors from "cors";
import pubsub from './pubsub';
import schema from './schema/root';
const app = express();
const PORT = 3000;

const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,

  // setupFunctions maps from subscription name to a map of channel names and their filter functions 
  // in this case it will subscribe to the commentAddedChannel and re-run the subscription query 
  // every time a new comment is posted whose repository name matches args.repoFullName. 
  setupFunctions: {
    tradeAdded: (options, args) => ({
      tradeChannel: {
        filter: trade => true
      },
    }),
  },
});

subscriptionManager.subscribe({
  query: `
    subscription TradesSubscription {
      tradeAdded {
        symbol
        action
        amount
      }
    }
    `,
  context: {},
  callback: (err, data) => console.log(data),
});

app.use(cors());

app.use(graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(PORT, () => console.log(`GraphQL server running at http://localhost:${PORT}`));

const WS_PORT = 5000;

// Create WebSocket listener server 
const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

// Bind it to PORT and start listening 
websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));

const subscriptionServer = new SubscriptionServer(
  {
    onConnect: async (connectionParams) => {
      // Implement if you need to handle and manage connection 
    },
    subscriptionManager
  },
  {
    server: websocketServer,
    path: '/'
  }
);

// publish to the channel 
pubsub.publish('tradeChannel', {
  id: -1,
  symbol: 'ZVZTT',
  action: 'BUY',
  amount: 123,
});