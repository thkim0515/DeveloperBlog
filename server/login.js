const session = require("express-session");
const express = require("express");
const User = require("./users");
const router = express.Router();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const SESSION_KEY = process.env.SESSIONKEY;

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
      user.id
    );

    req.session.user = {
      id: user.id,
      nickname: user.nickname,
      email: user.email,
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

module.exports = router;
