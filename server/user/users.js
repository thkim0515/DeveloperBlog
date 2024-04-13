const session = require("express-session");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const SESSION_KEY = process.env.REACT_APP_SECURECODE;

router.use(
  session({
    secret: SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

router.post("/login", async (req, res) => {
  const { id, password } = req.body;

  try {
    const user = await User.findOne({ id }).exec();
    if (!user) {
      return res.status(404).json({ message: "아이디를 찾을 수 없습니다." });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    console.log(
      "사용자 정보:",
      user.nickname,
      user.email,
      user.profileimg,
      user.id,
      user._id
    );

    req.session.user = {
      id: user._id,
      nickname: user.nickname,
      profile: user.profileimg,
    };

    req.session.save((err) => {
      if (err) {
        console.error("세션 저장 실패", err);
        return res
          .status(500)
          .json({ message: "세션 저장 중 오류가 발생했습니다." });
      } else {
        res
          .status(200)
          .json({ message: "로그인 성공", user: req.session.user });
      }
    });
  } catch (error) {
    console.error("서버 오류", error);
    return res
      .status(500)
      .json({ message: "서버 오류가 발생했습니다.", error });
  }
});

// C
router.post("/signup", async (req, res) => {
  const { id, nickname, email, password, profileimg } = req.body;
  try {
    const duplicatId = await User.findOne({ id });
    if (duplicatId) {
      return res.status(409).json({ message: "아이디가 이미 사용 중입니다." });
    }

    const duplicatNickname = await User.findOne({ nickname });
    if (duplicatNickname) {
      return res.status(409).json({ message: "닉네임이 이미 사용 중입니다." });
    }

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
    res.status(500).json({ message: "서버 에러" });
    console.error("Signup error:", error);
  }
});

// R
router.get("/read/:_id", async (req, res) => {
  try {
    const readUserdata = await User.findOne({ _id: req.params._id });
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
      { _id: req.params._id },
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
      _id: req.params._id,
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
