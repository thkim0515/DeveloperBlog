const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  pid: Number,
  title: String,
  nickname: String,
  postdate: Date,
  language: String,
  publicPrivate: Boolean,
  ace_contents: String,
  toast_contents: String,
  imagePath: String,
  profileImg: String,
});

const Content =
  mongoose.models.contents ||
  mongoose.model("contents", contentSchema, "contents");

router.get("/", async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
