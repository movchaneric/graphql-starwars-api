const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Character",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "Name of the film character",
    },
    height: {
      type: GraphQLString,
    },
    mass: {
      type: GraphQLString,
    },
    hair_color: {
      type: GraphQLString,
    },
    skin_color: {
      type: GraphQLString,
    },
    eye_color: {
      type: GraphQLString,
    },
    birth_year: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    created: {
      type: GraphQLString,
    },
    edited: {
      type: GraphQLString,
    },
  }),
});
