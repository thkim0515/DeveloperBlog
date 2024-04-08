const express = require("express");
const router = express.Router();
const Content = require("../models/contentModel");
const svgsData = require("../models/svgModel");
const Comment = require("../models/commentModel");
//images
router.get("/contents", async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//svgs
router.get("/svgsdata", async (req, res) => {
  try {
    const svgsdata = await svgsData.find();
    res.json(svgsdata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// C
router.post("/create", async (req, res) => {
  const {
    title,
    nickname,
    language,
    publicPrivate,
    imagePath,
    profileImg,
    ace_contents,
    toast_contents,
  } = req.body;
  try {
    const lastContent = await Content.findOne().sort({ pid: -1 });
    const pid = lastContent && lastContent.pid ? lastContent.pid + 1 : 1;
    const newContents = new Content({
      pid,
      title,
      nickname,
      language,
      publicPrivate,
      imagePath,
      profileImg,
      ace_contents,
      toast_contents,
    });
    await newContents.save();
    res.status(201).json({ message: "글 등록 성공", pid: newContents.pid });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// All R
/*
최초 렌더링 할 때 사용할지 고민중...

router.get("/read", async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});
*/

// R
router.get("/read/:_id", async (req, res) => {
  try {
    const content = await Content.findOne({ _id: req.params._id });
    if (!content) {
      return res.status(404).json({ message: "파일없음" });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// U
router.put("/update/:_id", async (req, res) => {
  try {
    const updatedContent = await Content.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    if (!updatedContent) {
      return res.status(404).json({ message: "파일없음" });
    }
    res.status(200).json({ message: "수정성공", updatedContent });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// D
router.delete("/delete/:_id", async (req, res) => {
  try {
    const deletedContent = await Content.findOneAndDelete({
      _id: req.params._id,
    });
    if (!deletedContent) {
      return res.status(404).json({ message: "파일없음" });
    }

    // 콘텐츠가 삭제될 경우 가지고있는 코멘트도 전부
    const deletedComments = await Comment.deleteMany({
      postId: req.params._id,
    });

    res.status(200).json({
      message: "삭제성공",
      deletedContentInfo: deletedContent,
      deletedCommentsCount: deletedComments.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
