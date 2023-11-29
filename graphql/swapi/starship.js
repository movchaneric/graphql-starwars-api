const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

const filmType = require("./film");
const peopleType = require("./people");
const graphqlResolver = require("../resolver");

const starshipType = new GraphQLObjectType({
  name: "Starship",
  description: "Starship object from star wars api",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    model: {
      type: GraphQLString,
    },
    starship_class: {
      type: GraphQLString,
    },
    manufacturer: {
      type: GraphQLString,
    },
    cost_in_credits: {
      type: GraphQLString,
    },
    length: {
      type: GraphQLString,
    },
    crew: {
      type: GraphQLString,
    },
    passengers: {
      type: GraphQLString,
    },
    max_atmosphering_speed: {
      type: GraphQLString,
    },
    hyperdrive_rating: {
      type: GraphQLString,
    },
    MGLT: {
      type: GraphQLString,
    },
    cargo_capacity: {
      type: GraphQLString,
    },
    consumables: {
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
    pilots: {
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

module.exports = starshipType;
