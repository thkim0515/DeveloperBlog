// mailer.js
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const loadSecrets = require("../loadSecrets");

let transporter;

loadSecrets().then((secrets) => {
  const EMAILUSER = secrets.REACT_APP_EMAILUSER;
  const EMAILPASS = secrets.REACT_APP_PASSWORD;

  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: EMAILUSER,
      pass: EMAILPASS,
    },
  });
});

async function sendAuthEmail(email, subject, content, value, addInfo = "") {
  const trimValue = value;
  console.log(trimValue);
  const mailOptions = {
    from: transporter.options.auth.user,
    to: email,
    subject: "StarBlog 이메일입니다.",
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
          .email-subject {
          color: #3a3a3c;
          font-size: 24px;

          letter-spacing: 1px;
          font-weight: bold;
          }
        </style>
      </head>
      <body>
        <h1 class="email-subject">${subject}</h1>
        <p>${content}<span class="auth-code">${trimValue}</span>입니다.</p>
        <p>${addInfo}</p>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = { sendAuthEmail };
