const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const db = require("./models");

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

  // graphQl
  const typeDefs = gql`
    type Product {
      id: ID
      item: String
      description: String
      price: Int
    }
    type User {
      id: ID
      name: String
      password: String
      cart(id: ID!): [Product]
      admin: Boolean
    }

    type Query {
      getUsers: [User!]
      getUser(id: ID!): User
      getProduct: [Product!]
    }
  `;

  const resolvers = {
    Query: {
      async getUsers() {
        const users = await db.User.find({});
        return users;
      },
      // getUsers: (parent, args, context, info) => {
      //   return db.User.find({});
      // },
      // getProduct: (parent, args, context, info) => {
      //   return db.Product.find({});
      // },
    },
  };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
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
