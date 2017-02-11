import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import Trade from './trade';
import Security from './security';

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
          return [
              {
                  symbol: "IBM",
                  action: "BUY",
                  amount: 100
              }
          ];
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