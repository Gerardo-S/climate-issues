const ClimateIssue = require("../../models/climateIssue");

module.exports = {
  Query: {
    async getClimateIssues() {
      try {
        const climateIssues = await ClimateIssue.find();
        return climateIssues;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
