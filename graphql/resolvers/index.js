const climateIssueResolvers = require("./climateIssues");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");

module.exports = {
  Query: {
    ...climateIssueResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...climateIssueResolvers.Mutation,
  },
};
