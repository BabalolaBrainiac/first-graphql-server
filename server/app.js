const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
  })
);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
