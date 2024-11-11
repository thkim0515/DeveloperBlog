const express = require("express");
const { TotalVisitor, DailyVisitor } = require("../models/visitorModel");
const { logError } = require("../error/processError");
const router = express.Router();

router.get("/visitor", async (req, res) => {
  const ip = req.ip;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    let dailyVisitor = await DailyVisitor.findOne({ date: today });

    if (!dailyVisitor) {
      dailyVisitor = new DailyVisitor({ date: today });
      await dailyVisitor.save();
    }

    if (!dailyVisitor.visitors.find((visitor) => visitor.ip === ip)) {
      dailyVisitor.visitors.push({ ip });
      dailyVisitor.count += 1;
      await dailyVisitor.save();
    }

    let totalVisitor = await TotalVisitor.findOne();

    if (!totalVisitor) {
      totalVisitor = new TotalVisitor();
      await totalVisitor.save();
    }

    if (!totalVisitor.visitors.find((visitor) => visitor.ip === ip)) {
      totalVisitor.visitors.push({ ip });
      totalVisitor.count += 1;
      await totalVisitor.save();
    }

    res.send(`${dailyVisitor.count}/${totalVisitor.count}`);
  } catch (error) {
    logError("방문자 수", error.message);
    res.status(500).send("서버 에러");
  }
});

module.exports = router;
