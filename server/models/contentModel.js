const mongoose = require("mongoose");

const userSetContentsSchema = new mongoose.Schema({
  pid: { type: Number },
  title: { type: String },
  nickname: { type: String },
  language: { type: String },
  publicPrivate: { type: Boolean },
  imagePath: { type: String },
  profileImg: { type: String },
  ace_contents: { type: String },
  toast_contents: { type: String },
  postdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
});

const Content =
  mongoose.models.contents || mongoose.model("contents", userSetContentsSchema);

module.exports = Content;
