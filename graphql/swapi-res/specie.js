const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Specie",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    classification: {
      type: GraphQLString,
    },
    designation: {
      type: GraphQLString,
    },
    average_height: {
      type: GraphQLString,
    },
    skin_colors: {
      type: GraphQLString,
    },
    hair_colors: {
      type: GraphQLString,
    },
    eye_colors: {
      type: GraphQLString,
    },
    average_lifespan: {
      type: GraphQLString,
    },
    language: {
      type: GraphQLString,
    },
    created: {
      type: GraphQLString,
    },
    edited: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});
