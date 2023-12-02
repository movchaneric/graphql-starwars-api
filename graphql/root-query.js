const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const filmType = require("./swapi-res/film");

module.exports = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
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
  },
});
