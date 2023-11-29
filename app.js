const express = require("express");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const { graphqlHTTP } = require("express-graphql");
const graphqlResolver = require("./graphql/resolver");

const filmType = require("./graphql/swapi/film");
const peopleType = require("./graphql/swapi/people");
const planetType = require("./graphql/swapi/planet");
const specieType = require("./graphql/swapi/species");
const starshipType = require("./graphql/swapi/starship");
const vehicleType = require("./graphql/swapi/vehicle");

const app = express();

// Define a root query
//maybe getFilmsById doest get read becuase need prefix of graphqlResolver.getFilm...
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    film: {
      type: filmType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve: (_, { id }) => graphqlResolver.getFilms(id),
    },
    planet: {
      type: planetType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, { id }) => graphqlResolver.getPlanets(id),
    },
    species: {
      type: specieType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, { id }) => graphqlResolver.getSpiece(id),
    },
    starship: {
      type: starshipType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, { id }) => graphqlResolver.getStarShip(id),
    },
    people: {
      type: peopleType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, { id }) => graphqlResolver.getPeople(id),
    },
    vehicle: {
      type: vehicleType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve: (_, { id }) => graphqlResolver.getVehicles(id),
    },
  }),
  // Add other queries..
});

//GraphQL schema
const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphqlResolver,
    graphiql: true,
  })
);

app.listen(3000);
console.log(`Listening to port 3000`);
