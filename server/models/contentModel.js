const mongoose = require("mongoose");

const userSetContentsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pid: { type: Number },
  title: { type: String },
  nickname: { type: String },
  profileImg: { type: String },
  language: { type: String },
  publicPrivate: { type: Boolean },
  imagePath: { type: String },
  ace_contents: { type: String },
  toast_contents: { type: String },
  postdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  likeUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Content =
  mongoose.models.contents || mongoose.model("Content", userSetContentsSchema);

module.exports = Content;
