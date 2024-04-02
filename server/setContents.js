const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userSetContents = new mongoose.Schema({
  pid: Number,
  title: String,
  nickname: String,
  language: String,
  publicPrivate: Boolean,
  imagePath: String,
  profileImg: String,
  ace_contents: String,
  toast_contents: String,
  postdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
});

const UserSignup = mongoose.model("content", userSetContents);

router.post("/annotate", async (req, res) => {
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
    const lastContent = await UserSignup.findOne().sort({ pid: -1 });
    const pid = lastContent && lastContent.pid ? lastContent.pid + 1 : 1;
    const newContents = new UserSignup({
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
    console.error("setContents error:", error);
  }
});

module.exports = router;
