const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const PORT = process.env.PORT || 8080;

async function startApolloServer() {
  const app = express();
  // middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],

    // playground: process.env.NODE_ENV !== "production",
  });

  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/climate-action"
  );

  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    console.log(
      `Apollo server ready at http://localhost:8080${server.graphqlPath}`
    );
  });
}

startApolloServer();
