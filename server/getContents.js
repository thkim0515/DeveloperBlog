const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  pid: Number,
  title: String,
  writer: String,
  date: String,
  imagePath: String,
  profileImg: String,
  lang: String,
  publicPrivate: Boolean,
  contents: String,
});

const UserData = mongoose.model("userData", userDataSchema, "userdata");

router.get("/", async (req, res) => {
  try {
    const userdata = await UserData.find();
    res.json(userdata);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
