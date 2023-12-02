const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Planet",
  description: "Planet object from Star Wars API",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "Name of the species",
    },
    rotation_period: {
      type: GraphQLString,
    },
    orbital_period: {
      type: GraphQLString,
    },
    diameter: {
      type: GraphQLString,
    },
    climate: {
      type: GraphQLString,
    },
    gravity: {
      type: GraphQLString,
    },
    terrain: {
      type: GraphQLString,
    },
    surface_water: {
      type: GraphQLString,
    },
    population: {
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
