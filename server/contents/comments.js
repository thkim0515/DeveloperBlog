const express = require("express");
const router = express.Router();
const Comment = require("../models/commentModel");

// C
router.post("/create", async (req, res) => {
  const { postId, nickname, comment } = req.body;
  try {
    const newComments = new Comment({
      postId,
      nickname,
      comment,
    });
    await newComments.save();
    res.status(201).json({ message: "댓글 등록 성공", pid: newComments.pid });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
