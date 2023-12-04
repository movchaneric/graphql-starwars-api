const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const { getFilteredData, getHomeWorld } = require("../util/loader");

const characterType = new GraphQLObjectType({
  name: "Character",
  fields: () => {
    const filmType = require("./film");
    return {
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
      films: {
        type: new GraphQLList(filmType),
        resolve: (people, parent, args) => {
          return getFilteredData(people.films);
        },
      },
      homeworld: {
        type: planetType,
        resolve: async (character, parent, args) => {
          return getHomeWorld(character);
        },
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
    };
  },
});

module.exports = characterType;
