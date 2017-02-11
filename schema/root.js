import {
  GraphQLSchema,
} from 'graphql';

import QueryType from './query.js';
import SubscriptionType from './subscription.js';
import MutationType from './mutation.js';

export default new GraphQLSchema({
  query: QueryType,
  subscription: SubscriptionType,
  mutation: MutationType
})