const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const userSignupSchema = new mongoose.Schema({
  id: String,
  nickname: String,
  email: String,
  password: String,
});

const UserSignup = mongoose.model("user", userSignupSchema);

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { id, nickname, email, password } = req.body;
  try {
    const newUser = new UserSignup({ id, nickname, email, password });
    await newUser.save();
    res.status(201).json({ message: "회원가입 성공" });
  } catch (error) {
    res.status(500).json({ message: "서버 에러로 인한 회원가입 실패" });
    console.error("Signup error:", error);
  }
});

module.exports = router;
