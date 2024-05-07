const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: function () {
      return this.postType === "Content" ? "Content" : "Project";
    },
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    default: null,
  },
  postType: {
    type: String,
    required: true,
    enum: ["Content", "Project"],
  },
  comment: { type: String, required: true },
  postdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
});

const Comment =
  mongoose.models.comments || mongoose.model("comments", commentSchema);

module.exports = Comment;
