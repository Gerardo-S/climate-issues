const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const ClimateIssue = require("../../models/climateIssue");
const Comment = require("../../models/comment");

const checkAuth = require("../../util/check-auth");
module.exports = {
  Query: {
    async getClimateIssues() {
      try {
        const climateIssues = await ClimateIssue.find()
          // Populate fields with ID
          .populate("author")
          .populate({ path: "comments", model: Comment });
        return climateIssues;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getClimateIssueByAuthor(_, arg, context) {
      const user = checkAuth(context);
      const climateIssues = await ClimateIssue.find({
        author: user.id,
      }).populate("author comments");
      try {
        if (climateIssues) {
          return climateIssues;
        } else {
          throw new Error(`No climate issue found for id`);
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  // CREAT And Delete routes
  Mutation: {
    async createClimateIssue(_, { title, body }, context) {
      // check if user is auth before creating issue
      const user = checkAuth(context);
      const newClimateIssue = new ClimateIssue({
        title,
        body,
        author: user.id,
        createdAt: new Date().toISOString(),
      });
      const climateIssue = await newClimateIssue.save();
      return climateIssue;
    },

    async deleteClimateIssue(_, { climateIssueId }, context) {
      // obtain user from req.body and check if current user is auth
      const user = checkAuth(context);
      try {
        // search for issue by id and embed author object
        const climateIssue = await ClimateIssue.findById(
          climateIssueId
        ).populate("author");
        const postAuthor = climateIssue.author.username;
        // see if logged in user matches climate issue author
        if (user.username === postAuthor) {
          await climateIssue.delete();
          return "Climate Issue deleted successfully";
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } catch (err) {
        throw new Error(err);
      }
    },

    async upVoteClimateIssue(_, { climateIssueId }, context) {
      const { username } = checkAuth(context);
      const climateIssue = await ClimateIssue.findById(climateIssueId).populate(
        "author comments"
      );

      if (climateIssue) {
        // One vote per user, check if current vote in climate issue matches logged in user
        if (climateIssue.upVote.find((vote) => vote.username === username)) {
          throw new UserInputError(
            "You have already Up Voted on this climate issue"
          );
        } else {
          // You have not up-voted climate issue, up-vote
          climateIssue.upVote.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        climateIssue.setTotalVoteCount();
        await climateIssue.save();
        return climateIssue;
      } else throw new UserInputError("Climate Issue not found");
    },

    async downVoteClimateIssue(_, { climateIssueId }, context) {
      const { username } = checkAuth(context);
      const climateIssue = await ClimateIssue.findById(climateIssueId).populate(
        "author comments"
      );
      if (climateIssue) {
        // One vote per user, check if current vote in climate issue matches logged in user
        if (climateIssue.downVote.find((vote) => vote.username === username)) {
          throw new UserInputError(
            "You have already Down Voted on this climate issue"
          );
        } else {
          // You have not Down Voted climate issue, downVote
          climateIssue.downVote.push({
            username,
            createdAt: new Date().toISOString(),
          });
        }
        climateIssue.setTotalVoteCount();
        await climateIssue.save();
        return climateIssue;
      } else throw new UserInputError("Climate Issue not found");
    },
  },
};
