import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Trade',
  description: 'Trade object',
  fields: {
    id:     {type: GraphQLID},
    symbol: { type: GraphQLString },
    action: { type: GraphQLString },
    amount: { type: GraphQLInt }
  }
})