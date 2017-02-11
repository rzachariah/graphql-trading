import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Security',
  description: '',
  fields: {
    symbol: {type: GraphQLString },
    name: { type: GraphQLString }
  }
});