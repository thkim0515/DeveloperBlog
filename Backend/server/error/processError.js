const express = require("express");
const router = express.Router();

function logError(mission, errorMessage) {
  console.log(`[${mission}] 에러 발생! \n로그 >>  ${errorMessage}`);
}

router.post("/logError", (req, res) => {
  const { errorMessage } = req.body;
  logError(errorMessage);
  res.status(200).json({ message: "에러 로그 반영" });
});

module.exports = { router, logError };
