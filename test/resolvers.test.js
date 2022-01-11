const { describe, it, before } = require("mocha");
const climateIssueResolver = require("../graphql/resolvers/climateIssues");
const EasyGraphQLTester = require("easygraphql-tester");
const typeDefs = require("../graphql/typeDefs");

describe("Test Queries", () => {
  let tester;
  before(() => {
    tester = new EasyGraphQLTester(typeDefs, climateIssueResolver);
  });

  // Test Query for getClimateIssues
  it("Should pass if the query is valid", () => {
    const validQuery = `
    {
      getClimateIssues{
        id
        title
        author{
          id
          username
        }
        body
        comments{
          id
         author
          body
        }
        downVote{
          id
          createdAt
          username
        }
        upVote{
          id
          createdAt
          username
        }
        totalVoteCount
        createdAt
      }
    }`;
    tester.test(true, validQuery);
  });

  it("Should fail if the query is invalid", () => {
    const invalidQuery = `

    {
      getClimateIssues{
        # not a field
        importantIssue
      }
    }
    `;

    tester.test(false, invalidQuery);
  });
});
