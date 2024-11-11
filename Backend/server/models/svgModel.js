const mongoose = require("mongoose");

const svgsDataSchema = new mongoose.Schema({
  svgs: [String],
});

const svgsData =
  mongoose.models.svgData ||
  mongoose.model("svgData", svgsDataSchema, "svgdata");

module.exports = svgsData;
