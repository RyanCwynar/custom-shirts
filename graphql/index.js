const _ = require('lodash');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typeDefs')

const resolvers = {
  Query: {
  },
  Mutation: {}
};

const apolloServer = new ApolloServer({
  typeDefs, 
  resolvers, 
  playground: true,
});

module.exports = function (app) {
  apolloServer.applyMiddleware({ app })
};