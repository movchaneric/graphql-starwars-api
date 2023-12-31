const axios = require("axios");
const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");

const filmType = require("./swapi-res/film");
const characterType = require("./swapi-res/charecter");
const specieType = require("./swapi-res/specie");
const starshipType = require("./swapi-res/starship");
const vehicleType = require("./swapi-res/vehicle");

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
        try {
          const res = await axios.get("http://swapi.dev/api/films/");
          return res.data.results;
        } catch (err) {
          console.log("Inside errro");
          throw ("Error fetching all films", err);
        }
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
        console.log('res.data in root-query:', res.data)
        return res.data;
      },
    },
    charecters: {
      type: new GraphQLList(characterType),
      resolve: async (parent, args) => {
        try {
          const res = await axios.get("https://swapi.dev/api/people/");
          return res.data.results;
        } catch (err) {
          console.log("Inside errro");
          throw ("Error fetching all charecters", err);
        }
      },
    },

    specie: {
      type: specieType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        const res = await axios.get(
          `https://swapi.dev/api/species/${args.id}/`
        );
        return res.data;
      },
    },

    species: {
      type: new GraphQLList(specieType),
      resolve: async (parent, args) => {
        try {
          const res = await axios.get("https://swapi.dev/api/species/");
          return res.data.results;
        } catch (err) {
          console.log("Inside errro");
          throw ("Error fetching all species", err);
        }
      },
    },

    starship: {
      type: starshipType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (parent, args) => {
        const res = await axios.get(
          `https://swapi.dev/api/starships/${args.id}/`
        );
        return res.data;
      },
    },

    starships: {
      type: new GraphQLList(starshipType),
      resolve: async (parent, args) => {
        try {
          const res = await axios.get("https://swapi.dev/api/starships/");
          return res.data.results;
        } catch (err) {
          console.log("Inside errro");
          throw ("Error fetching all starships", err);
        }
      },
    },

    vehicle: {
      type: vehicleType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: async (_, args) => {
        const res = await axios.get(
          `https://swapi.dev/api/vehicles/${args.id}/`
        );
        return res.data;
      },
    },

    vehicles: {
      type: new GraphQLList(vehicleType),
      resolve: async (parent, args) => {
        const res = await axios.get(`https://swapi.dev/api/vehicles/`);
        return res.data.results;
      },
    },
  }),
});
