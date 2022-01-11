const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: String, required: true },
  // TODO find away to reference author here to User
  // author: { type: Schema.Types.ObjectId, ref: "User" },
  body: { type: String, required: true },
  createdAt: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
