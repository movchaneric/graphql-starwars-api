const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000);
console.log(`Listening to port 3000`);
