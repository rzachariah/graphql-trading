import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import Trade from './trade';

export default new GraphQLObjectType({
  name: 'Subscription',

  fields: {

    tradeChannel: {
      type: Trade,
      resolve: (rootValue) => rootValue
    },

  }
});