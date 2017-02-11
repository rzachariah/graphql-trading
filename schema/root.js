import {
  GraphQLSchema,
} from 'graphql';

import QueryType from './query.js';
import SubscriptionType from './subscription.js';

export default new GraphQLSchema({
  query: QueryType,
  subscription: SubscriptionType
})