const { gql } = require("apollo-server-express");

module.exports = gql`
  type Comment {
    id: ID!
    # Some climate issues have comments with no authers, otherwise query works
    # keep author as not required then change back when database is clean
    author: String
    body: String!
    createdAt: String!
    # climateIssue: ClimateIssue!
  }

  type voteCount {
    id: ID!
    createdAt: String!
    username: String!
  }
  type ClimateIssue {
    id: ID!
    # dont return User as query at creation
    author: User!
    title: String
    body: String
    comments: [Comment]!
    # TODO I may not need this vote count here
    voteCount: [voteCount]!
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
  }

  type Mutation {
    createClimateIssue(title: String!, body: String!): ClimateIssue!
    deleteClimateIssue(climateIssueId: ID!): String!

    # TODO add post for comment inputs are (climateID,body)
    createComment(climateIssueId: String!, body: String): ClimateIssue!
    deleteComment(climateIssueId: ID!, commentId: ID!): ClimateIssue!
    # TODO add post for voter count plus one
    voteClimateIssue(climateIssueId: ID!): ClimateIssue!
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`;
