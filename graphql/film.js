const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const filmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    title: {
      type: GraphQLString,
    },
    episode_id: {
      type: GraphQLInt,
    },
    opening_crawl: {
      type: GraphQLString,
    },
    director: {
      type: GraphQLString,
    },
    producer: {
      type: GraphQLString,
    },
    release_date: {
      type: GraphQLString,
    },
    // species: {
    //   type: GraphQLList(specieType),
    //   resolve: async (parent, args) => {

    //   }
    // },
    // starships: {
    //     type: GraphQLString
    // },
    // vehicles: {
    //     type: GraphQLString
    // },
    // characters: {
    //     type: GraphQLString
    // },
    // planets: {
    //     type: GraphQLString
    // },
    created: {
      type: GraphQLString,
    },
    edited: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
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

module.exports = new GraphQLSchema({
  query: RootQuery,
});
