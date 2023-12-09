const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const { getFilteredData, getHomeWorld } = require("../util/loader");

module.exports = new GraphQLObjectType({
  name: "Specie",
  fields: () => {
    const filmType = require("./film");
    const charecterType = require("./charecter");
    const planetType = require("./planet");
    return {
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
      films: {
        type: new GraphQLList(filmType),
        resolve: (specie, parent, args) => {
          console.log("species output:", specie);
          return dataLoaderResolver().loadMany(specie.films);
        },
      },
      people: {
        type: new GraphQLList(charecterType),
        resolve: (specie, parent, args) => {
          return dataLoaderResolver().loadMany(specie.people);
        },
      },
      homeworld: {
        type: planetType,
        resolve: async (specie, parent, args) => {
          return getHomeWorld(specie);
        },
      },
    };
  },
});
