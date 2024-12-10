const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  contentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Content",
  },
  ip: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
    index: { expires: "24h" },
  },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
