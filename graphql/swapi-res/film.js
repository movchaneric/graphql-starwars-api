const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const specieType = require("./specie"); //Next - resolve circul module problem
const starshipType = require("./starship");
const vehicleType = require("./vehicle");
const planetType = require("./planet");

const { getFilteredData, dataLoaderResolver } = require("../util/loader");

const filmType = new GraphQLObjectType({
  name: "Film",
  fields: () => {
    const charecterType = require("./charecter");
    return {
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
      characters: {
        type: new GraphQLList(charecterType),
        resolve: (film, args) => {
          console.log(dataLoaderResolver().loadMany(film.characters));
          return dataLoaderResolver().loadMany(film.characters); //using dataLoader
        },
      },
      planets: {
        type: new GraphQLList(planetType),
        resolve: (film, parent, args) => {
          return dataLoaderResolver().loadMany(film.planets);
        },
      },
      species: {
        type: new GraphQLList(specieType),
        resolve: (film, parent, args) => {
          return dataLoaderResolver().loadMany(film.species);
        },
      },
      starships: {
        type: new GraphQLList(starshipType),
        resolve: (film, parent, args) => {
          return dataLoaderResolver().loadMany(film.starships);
        },
      },
      vehicles: {
        type: new GraphQLList(vehicleType),
        resolve: (film, parent, args) => {
          return dataLoaderResolver().loadMany(film.vehicles);
        },
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

module.exports = filmType;
