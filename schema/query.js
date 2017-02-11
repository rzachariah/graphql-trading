import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import Trade from './trade';
import Security from './security';
import trades from '../trades';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'hackathon'
    },
    trades: {
      type: new GraphQLList(Trade),
      resolve: () => {
<<<<<<< HEAD
          return trades;
=======
          return [
              {
                  id: 1,
                  symbol: "IBM",
                  action: "BUY",
                  amount: 100
              }
          ];
>>>>>>> 0854a6e5857d21c84c2f83fc12fd95034e80c5d4
      }
    },
    securities: {
        type: new GraphQLList(Security),
        resolve: () => {
          return [
            {
              symbol: "APPL",
              name: "Apple Inc."
            }
          ];
        }
      }
  }
})