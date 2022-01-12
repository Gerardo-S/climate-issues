const {
  AuthenticationError,
  UserInputError,
} = require("apollo-server-express");
const Comment = require("../../models/comment");
const ClimateIssue = require("../../models/climateIssue");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Mutation: {
    async createComment(_, { climateIssueId, body }, context) {
      const user = checkAuth(context);

      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          error: {
            body: "Comment body must not be empty",
          },
        });
      }
      const newComment = new Comment({
        author: user.username,
        body,
        createdAt: new Date().toISOString(),
      });
      const comment = await newComment.save();
      const climateIssue = await ClimateIssue.findOneAndUpdate(
        { _id: climateIssueId },
        { $push: { comments: comment._id } }
      )
        .populate("comments author")
        .exec();
      // TODO revisit why returned climateIssue does not return with newly added comment
      if (climateIssue) {
        await climateIssue.save();
        return climateIssue;
      } else {
        throw new UserInputError(
          "Comment unsuccessfully added to Climate Issue "
        );
      }
    },

    async updateComment(_, { climateIssueId, commentId, body }, context) {
      const user = checkAuth(context);
      // Take a new body and update issue
      if (body.trim() === "") {
        throw new UserInputError("Empty comment", {
          error: {
            body: "Comment body must not be empty",
          },
        });
      }
      const updateComment = new Comment({
        author: user.username,
        body,
        createdAt: new Date().toISOString(),
      });
      const comment = await updateComment.save();

      // find climate issue and update comment
      const climateIssue = await ClimateIssue.findOneAndUpdate(
        { _id: climateIssueId, comments: commentId },
        { $set: { "comments.$": comment._id } }
      )
        .populate("comments author")
        .exec();
      // TODO revisit why returned climateIssue does not return with newly added comment
      if (climateIssue) {
        await climateIssue.save();
        return climateIssue;
      } else {
        throw new UserInputError(
          "Comment unsuccessfully added to Climate Issue "
        );
      }
    },

    async deleteComment(_, { climateIssueId, commentId }, context) {
      const { username } = checkAuth(context);

      const climateIssue = await ClimateIssue.findById(climateIssueId).populate(
        "author comments"
      );

      if (climateIssue) {
        // find index of comment in climate issue
        const commentIndex = climateIssue.comments.findIndex(
          (comment) => comment.id === commentId
        );
        // Check array of comments and see if comment author matches current username
        if (climateIssue.comments[commentIndex].author === username) {
          climateIssue.comments.splice(commentIndex, 1);
          await climateIssue.save();
          return climateIssue;
        } else {
          throw new AuthenticationError("Action not allowed");
        }
      } else {
        throw new UserInputError("Climate issue not found");
      }
    },
  },
};
