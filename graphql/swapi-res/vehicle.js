const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { getFilteredData } = require("../util/loader");

module.exports = new GraphQLObjectType({
  name: "Vehicle",
  fields: () => {
    const charecterType = require("./charecter");
    const filmType = require("./film");
    return {
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
      pilots: {
        type: new GraphQLList(charecterType),
        resolve: (vehicle, parent, args) => {
          return getFilteredData(vehicle.pilots);
        },
      },
      films: {
        type: new GraphQLList(filmType),
        resolve: (vehicle, parent, args) => {
          return getFilteredData(vehicle.films);
        },
      },
    };
  },
});
