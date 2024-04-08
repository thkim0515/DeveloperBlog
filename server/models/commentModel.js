const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Content",
    required: true,
  },
  // postId: { type: Number },
  nickname: { type: String, required: true },
  comment: { type: String, required: true },
  postdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
});

const Comment =
  mongoose.models.comments || mongoose.model("comments", commentSchema);

module.exports = Comment;
