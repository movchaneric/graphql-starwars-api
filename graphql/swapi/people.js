const filmType = require("./film");
const specieType = require("./species");
const starshipType = require("./starship");
const vehicleType = require("./vehicle");

const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const graphqlResolver = require("../resolver");

const peopleType = new GraphQLObjectType({
  name: "People",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    birth_year: {
      type: GraphQLString,
    },
    eye_color: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    hair_color: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLString,
    },
    mass: {
      type: GraphQLString,
    },
    skin_color: {
      type: GraphQLString,
    },
    homeworld: {
      type: GraphQLString,
    },
    films: {
      type: GraphQLList(filmType),
      resolve: (parent) => {
        // Ensure that parent.species is an array
        const filmsId = Array.isArray(parent.films)
          ? parent.films
          : [parent.films];
        return Promise.all(filmsId.map((id) => graphqlResolver.getFilms(id)));
      },
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
    starships: {
      type: GraphQLList(starshipType),
      resolve: (parent) => {
        // Ensure that parent.species is an array
        const starshipId = Array.isArray(parent.starships)
          ? parent.starships
          : [parent.starships];
        return Promise.all(
          starshipId.map((id) => graphqlResolver.getStarShip(id))
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

module.exports = peopleType;
