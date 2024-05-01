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
    default: Date.now,
    index: { expires: "24h" },
  },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
