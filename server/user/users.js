const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// C
router.post("/signup", async (req, res) => {
  const { id, nickname, email, password, profileimg } = req.body;
  try {
    const newUser = new User({
      id,
      nickname,
      email,
      password,
      profileimg,
    });
    await newUser.save();
    res.status(201).json({ message: "회원가입 성공" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ message: "이미 존재하는 아이디입니다." });
    } else {
      res.status(500).json({ message: "서버 에러로 인한 회원가입 실패" });
    }
    console.error("Signup error:", error);
  }
});

// R
router.get("/read/:_id", async (req, res) => {
  try {
    const readUserdata = await User.findOne({ pid: req.params._id });
    if (!readUserdata) {
      return res.status(404).json({ message: "계정 정보 없음" });
    }
    res.status(200).json(readUserdata);
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// U
router.put("/update/:_id", async (req, res) => {
  try {
    const updateUserData = await User.findOneAndUpdate(
      { pid: req.params._id },
      req.body,
      { new: true }
    );
    if (!updateUserData) {
      return res.status(404).json({ message: "계정 정보 없음" });
    }
    res.status(200).json({ message: "계정 수정성공", updateUserData });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

// D
router.delete("/delete/:_id", async (req, res) => {
  try {
    const deletedAccount = await User.findOneAndDelete({
      pid: req.params._id,
    });
    if (!deletedAccount) {
      return res.status(404).json({ message: "계정이 존재하지 않음" });
    }
    res.status(200).json({ message: "계정 삭제성공" });
  } catch (error) {
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
