const { AuthenticationError } = require("apollo-server-express");
const ClimateIssue = require("../../models/climateIssue");
const Comment = require("../../models/comment");
// const User = require("../../models/user");

const checkAuth = require("../../util/check-auth");
module.exports = {
  Query: {
    async getClimateIssues() {
      try {
        const climateIssues = await ClimateIssue.find()
          .populate("author")
          // Issues will store comment ID's
          .populate({ path: "comments", model: Comment });
        return climateIssues;
      } catch (err) {
        throw new Error(err);
      }
    },

    // async getClimateIssueByAuthor(_, { author }) {
    //   try {
    //     const climateIssues = await Comment.find({ author: author });
    //     // .populate(
    //     //   "author"
    //     // );

    //     if (climateIssues) {
    //       return climateIssues;
    //     } else {
    //       throw new Error(`No climate issue found for id:${author}`);
    //     }
    //   } catch (err) {
    //     throw new Error(err);
    //   }
    // },
  },
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
      // const updateUserPosts = await User.findOneAndUpdate(
      //   { _id: user.id },
      //   { $push: { postedClimateIssues: climateIssue } }
      // );
      // if (!updateUserPosts) {
      //   errors.general = "User posts unable to update";
      //   throw new Error("User not found", { errors });
      // }

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
  },
};
