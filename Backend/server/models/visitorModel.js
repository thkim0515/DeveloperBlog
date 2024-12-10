const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  ip: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const totalVisitorSchema = new mongoose.Schema({
  visitors: [visitorSchema],
  count: { type: Number, default: 0 },
});

const dailyVisitorSchema = new mongoose.Schema({
  visitors: [visitorSchema],
  date: { type: Date, required: true, index: true },
  count: { type: Number, default: 0 },
});

const TotalVisitor = mongoose.model("TotalVisitor", totalVisitorSchema);
const DailyVisitor = mongoose.model("DailyVisitor", dailyVisitorSchema);

module.exports = { TotalVisitor, DailyVisitor };
