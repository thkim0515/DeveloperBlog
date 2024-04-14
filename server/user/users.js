const session = require("express-session");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const Content = require("../models/contentModel");
const Comment = require("../models/commentModel");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { logError } = require("../error/processError");

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
    logError(error.message);
    return res
      .status(500)
      .json({ message: "서버 오류가 발생했습니다.", error });
  }
});

// C
router.post("/signup", async (req, res) => {
  const { id, nickname, email, password, profileimg } = req.body;
  try {
    if (id.length < 6 || id.length > 14) {
      return res
        .status(400)
        .json({ message: "아이디는 6글자 이상 14글자 이하여야 합니다." });
    }

    if (nickname.length < 6 || nickname.length > 14) {
      return res
        .status(400)
        .json({ message: "닉네임은 6글자 이상 14글자 이하여야 합니다." });
    }

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
    logError(error);
    res.status(500).json({ message: "서버 에러" });
  }
});

// R
router.get("/read/:_id", async (req, res) => {
  try {
    const readUserdata = await User.findById(req.params._id).select(
      "_id id nickname email profileimg"
    );
    console.log(readUserdata);
    if (!readUserdata) {
      return res.status(404).json({ message: "계정 정보 없음" });
    }
    res.status(200).json(readUserdata);
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// U
router.put("/update/:_id", async (req, res) => {
  try {
    const { nickname } = req.body; // 닉네임 정보
    const existingUser = await User.findOne({
      nickname,
      _id: { $ne: req.params._id },
    }); //사용자 제외하고, 이미 가입된 닉네임 있는지 확인
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "새로운 닉네임이 이미 사용 중입니다." });
    }

    const updateUserData = await User.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    if (!updateUserData) {
      return res.status(404).json({ message: "계정 정보 없음" });
    }
    res.status(200).json({ message: "계정 수정 성공", updateUserData });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

// D
router.delete("/delete/:_id", async (req, res) => {
  try {
    const userId = req.params._id;

    const deletedAccount = await User.findOneAndDelete({
      _id: userId,
    });

    if (!deletedAccount) {
      return res.status(404).json({ message: "계정이 존재하지 않음" });
    }
    await Comment.deleteMany({ userId: userId });
    await Content.deleteMany({ userId: userId });

    res.status(200).json({ message: "계정 삭제성공" });
  } catch (error) {
    logError(error.message);
    res.status(500).json({ message: "서버 에러" });
  }
});

module.exports = router;
