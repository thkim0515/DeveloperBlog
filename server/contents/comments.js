const express = require("express");
const router = express.Router();
const Comment = require("../models/commentModel");
const User = require("../models/userModel");
const { logError } = require("../error/processError");

// C
router.post("/create", async (req, res) => {
  const { userId, postId, parentId, comment } = req.body; // parentId 추가
  console.log(userId, postId, comment, parentId);
  try {
    const newComment = new Comment({
      userId,
      postId,
      parentId, // 대댓글용
      comment,
    });
    await newComment.save();
    res.status(201).json({ message: "댓글 등록 성공", pid: newComment._id });
  } catch (error) {
    logError("댓글 생성", error.message);
    res.status(500).json({ message: "서버 에러", error: error.message });
  }
});

// R

// Read API가 Ref하는게 connents 여서 엔드포인트 postID사용 ( connents 의 postID값을 저장후 참조)
router.get("/read/:postId", async (req, res) => {
  try {
    const { postId } = req.params;

    const comments = await Comment.find({ postId: postId })
      .sort({ postdate: -1 })
      .populate("userId", "nickname profileimg")
      .exec();

    res.status(200).json(comments);
  } catch (error) {
    logError("댓글 읽기", error.message);
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
    logError("댓글 업데이트", error.message);
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
    logError("댓글 삭제", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

router.get("/count/:postId", async (req, res) => {
  try {
    const { postId } = req.params;
    const count = await Comment.countDocuments({ postId: postId });
    res.status(200).json({ postId: postId, count: count });
  } catch (error) {
    logError("댓글 카운트", error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
