const { gql } = require("apollo-server-express");

module.exports = gql`
  type ClimateIssue {
    id: ID!
    author: String
    title: String
    body: String
    comments: [String]
    voteCount: Int
  }

  type Query {
    getClimateIssues: [ClimateIssue!]
  }
`;
