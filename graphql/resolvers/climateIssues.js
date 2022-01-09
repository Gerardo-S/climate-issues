const db = require("../../models");

module.exports = {
  Query: {
    async getClimateIssues() {
      try {
        const climateIssues = await db.ClimateIssue.find();
        return climateIssues;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
