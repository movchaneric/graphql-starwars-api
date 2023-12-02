const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Vehicle",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "Name of the species",
    },
    model: {
      type: GraphQLString,
    },
    manufacturer: {
      type: GraphQLString,
    },
    cost_in_credits: {
      type: GraphQLString,
    },
    length: {
      type: GraphQLString,
    },
    max_atmosphering_speed: {
      type: GraphQLString,
    },
    crew: {
      type: GraphQLString,
    },
    passengers: {
      type: GraphQLString,
    },
    cargo_capacity: {
      type: GraphQLString,
    },
    consumables: {
      type: GraphQLString,
    },
    vehicle_class: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});
