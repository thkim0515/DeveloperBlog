import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const EmailVerification = ({ userEmail, onEmailVerified }) => {
  const [authCode, setauthCode] = useState("");
  const [userInputauthCode, setUserInputauthCode] = useState("");
  const [isSend, setIsSend] = useState(false);
  const navigate = useNavigate();

  const handleSnedAuthCode = async () => {
    try {
      if (!userEmail) {
        alert("이메일을 입력해주세요.");
        return;
      }
      setIsSend(true);
      const response = await axios.post("/email/email", {
        email: userEmail,
      });
      setauthCode(response.data.authCode);
      alert("인증번호가 이메일로 전송되었습니다.");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
        navigate("/login/");
      } else {
        console.error("인증번호 전송 실패:", error);
      }
    }
  };

  const handleInputauthCode = e => {
    setUserInputauthCode(e.target.value);
  };

  const handleCheckAuthCode = () => {
    const authCodeString = String(authCode).trim();
    const inputCodeString = String(userInputauthCode).trim();

    if (authCodeString === inputCodeString) {
      // alert("이메일 인증 성공!");
      onEmailVerified(true);
      setIsSend(false);
      navigate("/signup", { state: { email: userEmail } });
    } else {
      alert("입력하신 인증번호가 올바르지 않습니다.\n인증번호 전송을 다시 시도해주세요.");
      setUserInputauthCode("");
      onEmailVerified(false);
      setIsSend(false);
    }
  };

  return (
    <>
      <VerifyInputnAndButtonBox>
        <input
          type="text"
          id="emailVertify"
          className="input"
          content="이메일 인증번호 입력"
          value={userInputauthCode}
          onChange={handleInputauthCode}
        />

        <SendButton
          type="button"
          onClick={handleSnedAuthCode}
          disabled={isSend} // isSend가 true일 때 버튼 비활성화
          className="button">
          인증번호 전송
        </SendButton>

        <ConfirmButton type="button" onClick={handleCheckAuthCode} disabled={!isSend} className="button">
          인증확인
        </ConfirmButton>
      </VerifyInputnAndButtonBox>
    </>
  );
};

const VerifyInputnAndButtonBox = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;

  .input {
    width: 64%;
    padding: 0.65rem;
    border: 1px solid #d9d9d9;
    background: #ffffff;
  }

  .button {
    display: inline-block;
    padding: 0.65rem;
    color: #fff;
  }
`;

const SendButton = styled.button`
  background-color: ${props => (props.disabled ? "#c0c0c0" : "#3f72af")};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
`;

const ConfirmButton = styled.button`
  background-color: ${props => (props.disabled ? "#c0c0c0" : "#2a80c2")};
`;
