const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

//TODO: Search a solution on how to avoid one ugly file with all types combined!!!!
const filmType = require("./swapi-res/film");
const characterType = require("./swapi-res/charecter");

module.exports = new GraphQLObjectType({
  name: "RootQuery",
  fields: () => ({
    film: {
      type: filmType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: async (parent, args) => {
        const res = await axios.get(`http://swapi.dev/api/films/${args.id}/`);
        return res.data;
      },
    },

    films: {
      type: new GraphQLList(filmType),
      resolve: async (parent, args) => {
        const res = await axios.get("http://swapi.dev/api/films/");
        return res.data.results;
      },
    },

    character: {
      type: characterType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        const res = await axios.get(`https://swapi.dev/api/people/${args.id}/`);
        return res.data;
      },
    },
  }),
});
