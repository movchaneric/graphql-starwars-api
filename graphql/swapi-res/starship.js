const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const { getFilteredData } = require("../util/loader");

module.exports = new GraphQLObjectType({
  name: "Starship",
  fields: () => {
    const filmType = require("./film");
    const charecterType = require("./charecter");
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
      hyperdrive_rating: {
        type: GraphQLString,
      },
      MGLT: {
        type: GraphQLString,
      },
      starship_class: {
        type: GraphQLString,
      },
      url: {
        type: GraphQLString,
      },
      films: {
        type: new GraphQLList(filmType),
        resolve: (starship, parent, args) => {
          console.log("species output:", specie);
          return getFilteredData(starship.films);
        },
      },
      pilos: {
        type: new GraphQLList(charecterType),
        resolve: (starship, parent, args) => {
          return getFilteredData(starship.people);
        },
      },
    };
  },
});
