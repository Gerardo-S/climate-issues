const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const climateIssueSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  voteCount: Number,
  createdAt: String,
});

const ClimateIssue = mongoose.model("ClimateIssue", climateIssueSchema);

module.exports = ClimateIssue;
