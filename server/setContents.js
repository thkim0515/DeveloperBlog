const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userSetContents = new mongoose.Schema({
  pid: Number,
  title: String,
  nickname: String,
  language: String,
  publicPrivate: Boolean,
  ace_contents: String,
  toast_contents: String,
  signupdate: {
    type: Date,
    default: () => new Date(new Date().getTime() + 9 * 60 * 60 * 1000),
  },
});

const UserSignup = mongoose.model("content", userSetContents);

router.post("/annotate", async (req, res) => {
  console.log(req.body);
  const {
    pid,
    title,
    nickname,
    language,
    publicPrivate,
    ace_contents,
    toast_contents,
  } = req.body;
  try {
    const newContents = new UserSignup({
      pid,
      title,
      nickname,
      language,
      publicPrivate,
      ace_contents,
      toast_contents,
    });
    await newContents.save();
    res.status(201).json({ message: "글 등록 성공" });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
    console.error("setContents error:", error);
  }
});

module.exports = router;
