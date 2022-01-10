const Comment = require("../../models/comment");
module.exports = {
  Query: {
    async getComments(_, { commentId }) {
      try {
        const comment = await Comment.findById(commentId).populate("author");

        if (comment) {
          return comment;
        } else {
          throw new Error("No comments found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
