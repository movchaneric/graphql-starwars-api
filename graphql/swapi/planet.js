const filmType = require("./film");
const peopleType = require("./people");
const graphqlResolver = require("../resolver");

const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const planetType = new GraphQLObjectType({
  name: "Planet",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    diameter: {
      type: GraphQLString,
    },
    rotation_period: {
      type: GraphQLString,
    },
    orbital_period: {
      type: GraphQLString,
    },
    gravity: {
      type: GraphQLString,
    },
    population: {
      type: GraphQLString,
    },
    climate: {
      type: GraphQLString,
    },
    terrain: {
      type: GraphQLString,
    },
    surface_water: {
      type: GraphQLString,
    },
    residents: {
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

module.exports = planetType;
