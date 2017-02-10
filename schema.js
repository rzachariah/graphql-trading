import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => 'hackathon'
    }
  }
})

export default new GraphQLSchema({
  query: QueryType
}) 