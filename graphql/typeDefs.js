const { gql } = require("apollo-server-express");

module.exports = gql`
  type Comment {
    id: ID!
    # keep author as not required then change back when database is clean
    author: String!
    body: String!
    createdAt: String!
  }

  type DownVote {
    id: ID!
    createdAt: String!
    username: String!
  }
  type UpVote {
    id: ID!
    createdAt: String!
    username: String!
  }

  type ClimateIssue {
    id: ID!
    # TODO author is not returning during creation
    author: User!
    title: String
    body: String
    comments: [Comment]!
    downVote: [DownVote]!
    upVote: [UpVote]!
    totalVoteCount: Int
    createdAt: String
  }
  type User {
    id: ID!
    username: String!
    token: String!
    createdAt: String
  }

  input RegisterInput {
    username: String!
    password: String!
  }

  type Query {
    # Read Routes
    getClimateIssues: [ClimateIssue]
    getClimateIssueByAuthor: [ClimateIssue!]
  }

  type Mutation {
    # Authentication
    login(username: String!, password: String!): User!
    register(registerInput: RegisterInput): User!
    # Create Routes
    createClimateIssue(title: String!, body: String!): ClimateIssue!
    createComment(climateIssueId: String!, body: String): ClimateIssue!
    upVoteClimateIssue(climateIssueId: ID!): ClimateIssue!
    downVoteClimateIssue(climateIssueId: ID!): ClimateIssue!
    # Update comment Route
    updateComment(
      climateIssueId: ID!
      commentId: ID!
      body: String
    ): ClimateIssue!
    # Delete Routes
    deleteClimateIssue(climateIssueId: ID!): String!
    deleteComment(climateIssueId: ID!, commentId: ID!): ClimateIssue!
  }
`;
