const filmType = require("./film");
const peopleType = require("./people");
const graphqlResolver = require("../resolver");

const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const specieType = new GraphQLObjectType({
  name: "Specie",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    classification: {
      type: GraphQLString,
    },
    designation: {
      type: GraphQLString,
    },
    average_height: {
      type: GraphQLString,
    },
    average_lifespan: {
      type: GraphQLString,
    },
    eye_colors: {
      type: GraphQLString,
    },
    skin_colors: {
      type: GraphQLString,
    },
    language: {
      type: GraphQLString,
    },
    homeworld: {
      type: GraphQLString,
    },
    people: {
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

module.exports = specieType;
