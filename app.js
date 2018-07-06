const express = require("express");
const expressGraphQL = require("express-graphql");
const cors = require("cors");

const app = express();
app.use('*', cors());

const userSchema = require('./schema').userSchema;
const db = require('./db')();

app.use('/graphql', cors(), expressGraphQL({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

const port = process.env.port || 5009;
app.listen(port, () => {
  console.log(`GraphQL service is listening on ${port}`);
});
