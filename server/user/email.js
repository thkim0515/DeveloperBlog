const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { sendAuthEmail } = require("./sendEmail"); // mailer.js에서 sendAuthEmail 함수를 가져옵니다.

router.post("/email", async (req, res) => {
  const { email } = req.body;
  try {
    const duplicateEmail = await User.findOne({ email });
    if (duplicateEmail) {
      return res.status(409).json({ message: "사용중인 이메일입니다." });
    }

    const subject = "StarBlod 이메일 인증번호 입니다.";
    const content = "이메일의 인증번호는 ";

    const authCode = Math.floor(100000 + Math.random() * 900000);
    const emailSent = await sendAuthEmail(email, subject, content, authCode);

    if (emailSent) {
      res.json({ message: "인증번호 전송 성공", authCode });
    } else {
      res.status(500).send("인증번호 전송 실패");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
});

module.exports = router;
