const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const climateIssueSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  downVote: [{ username: String, createdAt: String }],
  upVote: [{ username: String, createdAt: String }],
  totalVoteCount: { type: Number },
  createdAt: String,
});

climateIssueSchema.methods.setTotalVoteCount = function () {
  this.totalVoteCount = this.upVote.length - this.downVote.length;
  return this.totalVoteCount;
};
const ClimateIssue = mongoose.model("ClimateIssue", climateIssueSchema);

module.exports = ClimateIssue;
