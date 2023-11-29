const filmType = require("./film");
const peopleType = require("./people");

const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const graphqlResolver = require("../resolver");

const vehicleType = new GraphQLObjectType({
  name: "Vehicle",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    model: {
      type: GraphQLString,
    },
    vehicle_class: {
      type: GraphQLString,
    },
    manufacturer: {
      type: GraphQLString,
    },
    length: {
      type: GraphQLString,
    },
    cost_in_credits: {
      type: GraphQLString,
    },
    crew: {
      type: GraphQLString,
    },
    mopassengersdel: {
      type: GraphQLString,
    },
    max_atmosphering_speed: {
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

module.exports = vehicleType;
