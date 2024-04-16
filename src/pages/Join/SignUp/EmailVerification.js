import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export const EmailVerification = ({ userEmail, onEmailVerified }) => {
  const [authCode, setauthCode] = useState("");
  const [userInputauthCode, setUserInputauthCode] = useState("");
  const [isSend, setIsSend] = useState(false);

  const handleSnedAuthCode = async () => {
    try {
      if (!userEmail) {
        alert("이메일을 입력해주세요.");
      }
      alert("인증번호가 이메일로 전송되었습니다.");
      setIsSend(true);
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
      setIsSend(false);
    } else {
      alert("입력하신 인증번호가 올바르지 않습니다.");
      onEmailVerified(false);
    }
  };

  return (
    <VerifyInputnAndButtonBox>
      <input
        type="text"
        placeholder="인증번호 입력"
        value={userInputauthCode}
        onChange={handleInputauthCode}
      />
      <VerifyButtonBox>
      <div>인증번호:</div>
      <SendButton type="button" onClick={handleSnedAuthCode}>
        받기
      </SendButton>
      <ConfirmButton type="button" onClick={handleCheckAuthCode} disabled={!isSend}>
        확인
      </ConfirmButton>
      </VerifyButtonBox>
    </VerifyInputnAndButtonBox>
  );
};

const VerifyInputnAndButtonBox = styled.div`
display: flex;
flex-direction: column;
`

const VerifyButtonBox = styled.div`
align-self: flex-end;
display: flex;
align-items: center;
gap: 8px;
  button {
    width: 40px;
    height: 24px;
    border-radius: 6px;
    color: #fff;
  }

`
const SendButton = styled.button`
  background-color: #3f72af;
`
const ConfirmButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#c0c0c0" : "#3f72af")};
`