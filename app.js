const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { graphql } = require("graphql");

const  graphqlSchema  = require("./graphql/film");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

app.listen(3000);
console.log(`Listening to port 3000`);
