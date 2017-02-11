import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import Trade from './trade';

export default new GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: {
    goodbye: {
      type: GraphQLString,
      resolve: () => 'hackathon'
    },
    trades: {
      type: new GraphQLList(Trade),
      resolve: () => {
          return [
              {
                  id: 1,
                  symbol: "IBM",
                  action: "BUY",
                  amount: 100
              }
          ];
      }
    }
  }
})