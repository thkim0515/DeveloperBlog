// mailer.js
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const EMAILUSER = process.env.REACT_APP_EMAILUSER;
const EMAILPASS = process.env.REACT_APP_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAILUSER,
    pass: EMAILPASS,
  },
});

async function sendAuthEmail(email, subject, content, value, addInfo = "") {
  const mailOptions = {
    from: EMAILUSER,
    to: email,
    subject: "StarBlog 인증 이메일입니다.",
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
        <p>${subject}</p>
        <p>${content}<span class="auth-code"> ${value} </span> 입니다.</p>
        <p>${addInfo}</p>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("인증번호 전송 성공");
    return true;
  } catch (error) {
    console.error("인증번호 전송 실패:", error);
    return false;
  }
}

module.exports = { sendAuthEmail };
