const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pid: { type: Number },
  title: { type: String, required: true },
  startDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  endDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updateDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  hashTags: [{ type: String }],
  stacks: [{ type: String }],
  roles: [{ type: String, required: true }],
  content: { type: String },
  memberList: [
    {
      type: String,
      validate: {
        validator: function (v) {
          return v.length <= 5;
        },
      },
    },
  ],
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  likeUser: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Project =
  mongoose.models.contents || mongoose.model("Project", projectSchema);

module.exports = Project;
