import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLInt
} from 'graphql';

import Trade from './trade';
import trades from '../trades';

export default new GraphQLObjectType({
    name: 'Mutation',
    description: '',
    fields: () => ({
        addTrade: {
            type: Trade,
            args: {
                trade: {
                    type: tradeInputType
                }
            },
            resolve: (object, {trade}) => {
                trades.push(trade);
                return trade;
            }
        }
    })
})

export const tradeInputType = new GraphQLInputObjectType({
    name: 'TradeInput',
    fields: () => ({
        symbol: { type: GraphQLString },
        name: { type: GraphQLString },
        amount: { type: GraphQLInt }
    })
});