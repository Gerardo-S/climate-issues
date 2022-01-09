const { gql } = require("apollo-server-express");

module.exports = gql`
  type Comment {
    id: ID!
    author: User
    body: String
    voteCount: Int
    createdAt: String
    comment: ClimateIssue!
  }
  type ClimateIssue {
    id: ID!
    author: String!
    title: String
    body: String
    comments: [Comment!]!
    voteCount: Int!
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
    # TODO get climateIssues by User ID
    # TODO add dummy data to test climateIssues carry comments list
    getClimateIssues: [ClimateIssue!]
  }

  type Mutation {
    # TODO add climateIssue inputs are (title, body)
    # TODO add post for voter count plus one
    # TODO add post for comment inputs are (climateID,body)
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
