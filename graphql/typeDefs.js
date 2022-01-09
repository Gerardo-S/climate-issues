const { gql } = require("apollo-server-express");

module.exports = gql`
  type Comment {
    id: ID!
    author: User
    body: String
    voteCount: Int
    createdAt: String
  }
  type ClimateIssue {
    id: ID!
    author: String
    title: String
    body: String
    climateIssue: ClimateIssue
    createdAt: String
  }
  type User {
    id: ID!
    username: String!
    token: String!
    postedClimateIssues: [ClimateIssue!]
    votedClimateIssues: [ClimateIssue!]
    createdAt: String
  }

  input RegisterInput {
    username: String!
    password: String!
  }

  type Query {
    getClimateIssues: [ClimateIssue!]
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
