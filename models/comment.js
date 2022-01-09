const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  body: { type: String, required: true },
  climateIssue: { type: Schema.Types.ObjectId, ref: "ClimateIssue" },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
