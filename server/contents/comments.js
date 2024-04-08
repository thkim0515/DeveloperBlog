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

// R

// Read API가 Ref하는게 connents 여서 엔드포인트 postID사용 ( connents 의 postID값을 저장후 참조)
router.get("/read/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const comment = await Comment.find({ postId: postId }).sort({
      postdate: -1,
    });
    if (!comment) {
      return res.status(404).json({ message: "댓글 없음" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// U
router.put("/update/:_id", async (req, res) => {
  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ message: "파일없음" });
    }
    res.status(200).json({ message: "수정성공", updatedComment });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// D
router.delete("/delete/:_id", async (req, res) => {
  try {
    const deletedcomment = await Comment.findOneAndDelete({
      _id: req.params._id,
    });
    if (!deletedcomment) {
      return res.status(404).json({ message: "파일없음" });
    }

    res.status(200).json({ message: "삭제성공" });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
