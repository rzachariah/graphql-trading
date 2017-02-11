import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import Trade from './trade';

export default new GraphQLObjectType({
  name: 'Subscription',

  fields: {

    tradeAdded: {
      type: Trade,
      resolve: (rootValue) => rootValue
    },

  }
});