import React, { useState } from "react";
import axios from "axios";

export const EmailVerification = ({ userEmail, onEmailVerified }) => {
  const [authCode, setauthCode] = useState("");
  const [userInputauthCode, setUserInputauthCode] = useState("");

  const handleSnedAuthCode = async () => {
    try {
      if (!userEmail) {
        alert("이메일을 입력해주세요.");
      }
      alert("인증번호가 이메일로 전송되었습니다.");
      const response = await axios.post("/email/email", {
        email: userEmail,
      });
      setauthCode(response.data.authCode);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        console.error("인증번호 전송 실패:", error);
      }
    }
  };

  const handleInputauthCode = (e) => {
    setUserInputauthCode(e.target.value);
  };

  const handleCheckAuthCode = () => {
    const authCodeString = String(authCode).trim();
    const inputCodeString = String(userInputauthCode).trim();

    if (authCodeString === inputCodeString) {
      alert("이메일 인증 성공!");
      onEmailVerified(true);
    } else {
      alert("입력하신 인증번호가 올바르지 않습니다.");
      onEmailVerified(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="인증번호 입력"
        value={userInputauthCode}
        onChange={handleInputauthCode}
      />
      <button type="button" onClick={handleSnedAuthCode}>
        인증번호 받기
      </button>
      <button type="button" onClick={handleCheckAuthCode}>
        인증번호 확인
      </button>
    </div>
  );
};
