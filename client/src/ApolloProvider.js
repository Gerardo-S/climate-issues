import React from "react";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

// Setting up instance to apollo
export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
