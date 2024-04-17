const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// 이메일 전송 설정
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "starblogk@gmail.com",
    pass: "hzvoqgwfyuavgwdz",
  },
});

router.post("/email", async (req, res) => {
  const { email } = req.body;
  try {
    const duplicatEmail = await User.findOne({ email });

    if (duplicatEmail) {
      return res.status(409).json({ message: "사용중인 이메일입니다." });
    }

    const authCode = Math.floor(100000 + Math.random() * 900000);

    const getEmail = req.body.email;
    const mailOptions = {
      from: "starblogk@gmail.com",
      to: getEmail,
      subject: "이메일 인증",
      html: `
        <html>
        <head>
          <style>
            .auth-code {
              padding: 10px;
              background-color: #f3f4f6; 
              border: 1px solid #d1d5db; 
              font-size: 16px; 
              font-family: Arial, sans-serif; 
              color: #111827; 
            }
          </style>
        </head>
        <body>
          <p>StarBlog에 가입중인 <span class="auth-code">${getEmail}</span> 이메일에 대하여 인증을 진행합니다.</p><br/>
          <p>인증번호는 <span class="auth-code">${authCode}</span> 입니다.</p>
        </body>
        </html>
  `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      message: "인증번호 전송 성공",
      authCode: authCode,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("인증번호 전송 실패");
  }
});

module.exports = router;
