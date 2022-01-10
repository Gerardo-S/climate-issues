const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: String, required: true },
  // author: { type: Schema.Types.ObjectId, ref: "User" },
  body: { type: String, required: true },
  // TODO I dont think i need to reference the climateIssue
  // Added comments will be controlled by individual climateIssues
  // climateIssue: { type: Schema.Types.ObjectId, ref: "ClimateIssue" },
  createdAt: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
