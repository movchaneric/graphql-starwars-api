// const axios = require("axios");

// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLList,
// } = require("graphql");

// const getFilteredData = require("../util/loader");

// // -------------------------  FILM TYPE --------------------
// const filmType = new GraphQLObjectType({
//   name: "Film",
//   fields: () => ({
//     title: {
//       type: GraphQLString,
//     },
//     episode_id: {
//       type: GraphQLInt,
//     },
//     opening_crawl: {
//       type: GraphQLString,
//     },
//     director: {
//       type: GraphQLString,
//     },
//     producer: {
//       type: GraphQLString,
//     },
//     release_date: {
//       type: GraphQLString,
//     },
//     species: {
//       type: new GraphQLList(specieType),
//       resolve: (film, parent, args) => {
//         return getFilteredData(film.species);
//       },
//     },
//     starships: {
//       type: new GraphQLList(starshipType),
//       resolve: (film, parent, args) => {
//         return getFilteredData(film.starships);
//       },
//     },
//     vehicles: {
//       type: new GraphQLList(vehicleType),
//       resolve: (film, parent, args) => {
//         return getFilteredData(film.vehicles);
//       },
//     },
//     characters: {
//       type: new GraphQLList(characterType),
//       resolve: (film, parent, args) => {
//         return getFilteredData(film.characters);
//       },
//     },
//     planets: {
//       type: new GraphQLList(planetType),
//       resolve: (film, parent, args) => {
//         return getFilteredData(film.planets);
//       },
//     },
//     created: {
//       type: GraphQLString,
//     },
//     edited: {
//       type: GraphQLString,
//     },
//     url: {
//       type: GraphQLString,
//     },
//   }),
// });

// // -------------------------  People TYPE --------------------
// const characterType = new GraphQLObjectType({
//   name: "Character",
//   fields: () => ({
//     name: {
//       type: GraphQLString,
//       description: "Name of the film character",
//     },
//     height: {
//       type: GraphQLString,
//     },
//     mass: {
//       type: GraphQLString,
//     },
//     hair_color: {
//       type: GraphQLString,
//     },
//     skin_color: {
//       type: GraphQLString,
//     },
//     eye_color: {
//       type: GraphQLString,
//     },
//     birth_year: {
//       type: GraphQLString,
//     },
//     gender: {
//       type: GraphQLString,
//     },
//     // TODO: module cycles problem
//     films: {
//       type: new GraphQLList(filmType),
//       resolve: (character, parent, args) => {
//         return getFilteredData(character.films);
//       },
//     },
//     url: {
//       type: GraphQLString,
//     },
//     created: {
//       type: GraphQLString,
//     },
//     edited: {
//       type: GraphQLString,
//     },
//   }),
// });
// // -------------------------  Planet TYPE --------------------
// const planetType = new GraphQLObjectType({
//   name: "Planet",
//   description: "Planet object from Star Wars API",
//   fields: () => ({
//     name: {
//       type: GraphQLString,
//       description: "Name of the species",
//     },
//     rotation_period: {
//       type: GraphQLString,
//     },
//     orbital_period: {
//       type: GraphQLString,
//     },
//     diameter: {
//       type: GraphQLString,
//     },
//     climate: {
//       type: GraphQLString,
//     },
//     gravity: {
//       type: GraphQLString,
//     },
//     terrain: {
//       type: GraphQLString,
//     },
//     surface_water: {
//       type: GraphQLString,
//     },
//     population: {
//       type: GraphQLString,
//     },
//     url: {
//       type: GraphQLString,
//     },
//     created: {
//       type: GraphQLString,
//     },
//     edited: {
//       type: GraphQLString,
//     },
//   }),
// });

// // -------------------------  Specie TYPE --------------------
// const specieType = new GraphQLObjectType({
//   name: "Specie",
//   fields: () => ({
//     name: {
//       type: GraphQLString,
//     },
//     classification: {
//       type: GraphQLString,
//     },
//     designation: {
//       type: GraphQLString,
//     },
//     average_height: {
//       type: GraphQLString,
//     },
//     skin_colors: {
//       type: GraphQLString,
//     },
//     hair_colors: {
//       type: GraphQLString,
//     },
//     eye_colors: {
//       type: GraphQLString,
//     },
//     average_lifespan: {
//       type: GraphQLString,
//     },
//     language: {
//       type: GraphQLString,
//     },
//     created: {
//       type: GraphQLString,
//     },
//     edited: {
//       type: GraphQLString,
//     },
//     url: {
//       type: GraphQLString,
//     },
//   }),
// });

// // -------------------------  Starship TYPE --------------------
// const starshipType = new GraphQLObjectType({
//   name: "Starship",
//   fields: {
//     name: {
//       type: GraphQLString,
//       description: "Name of the species",
//     },
//     model: {
//       type: GraphQLString,
//     },
//     manufacturer: {
//       type: GraphQLString,
//     },
//     cost_in_credits: {
//       type: GraphQLString,
//     },
//     length: {
//       type: GraphQLString,
//     },
//     max_atmosphering_speed: {
//       type: GraphQLString,
//     },
//     crew: {
//       type: GraphQLString,
//     },
//     passengers: {
//       type: GraphQLString,
//     },
//     cargo_capacity: {
//       type: GraphQLString,
//     },
//     consumables: {
//       type: GraphQLString,
//     },
//     hyperdrive_rating: {
//       type: GraphQLString,
//     },
//     MGLT: {
//       type: GraphQLString,
//     },
//     starship_class: {
//       type: GraphQLString,
//     },
//     url: {
//       type: GraphQLString,
//     },
//   },
// });

// const vehicleType = new GraphQLObjectType({
//   name: "Vehicle",
//   fields: () => ({
//     name: {
//       type: GraphQLString,
//       description: "Name of the species",
//     },
//     model: {
//       type: GraphQLString,
//     },
//     manufacturer: {
//       type: GraphQLString,
//     },
//     cost_in_credits: {
//       type: GraphQLString,
//     },
//     length: {
//       type: GraphQLString,
//     },
//     max_atmosphering_speed: {
//       type: GraphQLString,
//     },
//     crew: {
//       type: GraphQLString,
//     },
//     passengers: {
//       type: GraphQLString,
//     },
//     cargo_capacity: {
//       type: GraphQLString,
//     },
//     consumables: {
//       type: GraphQLString,
//     },
//     vehicle_class: {
//       type: GraphQLString,
//     },
//     url: {
//       type: GraphQLString,
//     },
//   }),
// });

// module.exports = {
//   filmType,
//   characterType,
//   planetType,
//   specieType,
//   starshipType,
//   vehicleType,
// };
