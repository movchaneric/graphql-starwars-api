const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const { specieType } = require("./species");
const { vehicleType } = require("./vehicle");
const { peopleType } = require("./people");
const { planetType } = require("./planet");

const graphqlResolver = require("../resolver");

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
    species: {
      type: GraphQLList(specieType),
      resolve: (parent) => {
        // Ensure that parent.species is an array
        const speciesIds = Array.isArray(parent.species)
          ? parent.species
          : [parent.species];
        return Promise.all(
          speciesIds.map((id) => graphqlResolver.getSpiece(id))
        );
      },
    },
    vehicles: {
      type: GraphQLList(vehicleType),
      resolve: (parent) => {
        // Ensure that parent.species is an array
        const vehiclesId = Array.isArray(parent.vehicles)
          ? parent.vehicles
          : [parent.vehicles];
        return Promise.all(
          vehiclesId.map((id) => graphqlResolver.getVehicles(id))
        );
      },
    },
    characters: {
      type: GraphQLList(peopleType),
      resolve: (parent) => {
        const charactersId = Array.isArray(parent.characters)
          ? parent.characters
          : [parent.characters];
        return Promise.all(
          charactersId.map((id) => graphqlResolver.getPeople(id))
        );
      },
    },
    planets: {
      type: GraphQLList(planetType),
      resolve: (parent) => {
        const planetsId = Array.isArray(parent.planets)
          ? parent.planets
          : [parent.planets];
        return Promise.all(
          planetsId.map((id) => graphqlResolver.getPlanets(id))
        );
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
  }),
});

module.exports = filmType;
