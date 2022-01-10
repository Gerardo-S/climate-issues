const { gql } = require("apollo-server-express");

module.exports = gql`
  type Comment {
    id: ID!
    author: User
    body: String
    createdAt: String
    # climateIssue: ClimateIssue!
  }
  type ClimateIssue {
    id: ID!
    author: User!
    title: String
    body: String
    # TODO I might not need this
    comments: [Comment!]
    voteCount: Int
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
    getClimateIssues: [ClimateIssue]
    # getUserPostedClimateIssues():[ClimateIssue]
    # getClimateIssueByAuthor(author: String!): [ClimateIssue!]
    # getComments(commentAuthor: String!): Comment
  }

  type Mutation {
    # TODO add climateIssue inputs are (title, body)
    createClimateIssue(title: String!, body: String!): ClimateIssue!
    deleteClimateIssue(climateIssueId: ID!): String!
    # TODO add post for voter count plus one
    # TODO add post for comment inputs are (climateID,body)
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    # createComment(title: String!, body: String!): Comment!
  }
`;
