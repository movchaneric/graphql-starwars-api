const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const specieType = require("./specie");
const starshipType = require("./starship");
const vehicleType = require("./vehicle");
const peopleType = require("./people");
const planetType = require("./planet");

const getFilteredData = require("../util/loader");

const swapiLinks = {
  species: "https://swapi.dev/api/species",
  starships: "https://swapi.dev/api/starships",
};

module.exports = new GraphQLObjectType({
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
      resolve: (film, parent, args) => {
        return getFilteredData(film.species);
      },
    },
    starships: {
      type: GraphQLList(starshipType),
      resolve: (film, parent, args) => {
        return getFilteredData(film.starships);
      },
    },
    vehicles: {
      type: GraphQLList(vehicleType),
      resolve: (film, parent, args) => {
        return getFilteredData(film.vehicles);
      },
    },
    characters: {
      type: GraphQLList(peopleType),
      resolve: (film, parent, args) => {
        return getFilteredData(film.characters);
      },
    },
    planets: {
      type: GraphQLList(planetType),
      resolve: (film, parent, args) => {
        return getFilteredData(film.planets);
      },
    },
    created: {
      type: GraphQLString,
    },
    edited: {
      type: GraphQLString,
    },
  }),
});
