const Comment = require("../../models/comment");
const ClimateIssue = require("../../models/climateIssue");
const checkAuth = require("../../util/check-auth");
const { UserInputError } = require("apollo-server-express");
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
      ).populate("comments author");

      if (climateIssue) {
        return climateIssue;
      } else {
        console.log("Comment Id not found", comment.id);
        throw new UserInputError(
          "Comment unsuccessfully added to Climate Issue "
        );
      }
    },
  },
};
