import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./SignUp.style";

// components
import { EmailVerification } from "./EmailVerification";
import { Metas } from "./../../../components/common/Metas";
import { InputField } from "../../../components/common/InputField";

export const SignUp = () => {
  const navigate = useNavigate();
  const [userInputData, setUserInputData] = useState({
    id: "",
    nickname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleInputData = (e) => {
    const { id, value } = e.target;
    setUserInputData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInputData.password !== userInputData.rePassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await axios.post("/users/signup", {
        id: userInputData.id,
        nickname: userInputData.nickname,
        email: userInputData.email,
        password: userInputData.password,
      });
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        alert("회원가입 실패");
      }
    }
  };

  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const handleEmailVerified = (verified) => {
    setIsEmailVerified(verified);
  };

  return (
    <>
      <Metas
        title="회원가입"
        url="/signUp"
        description="스타블로그와 함께 공부해요!"
      />
      <S.SignUpTitle>회원가입</S.SignUpTitle>
      <S.SignUpForm onSubmit={handleSubmit}>
        {/* 아이디 */}
        <InputField
          type="text"
          id="id"
          content="아이디"
          onChange={handleInputData}
        />

        {/* 닉네임 */}
        <InputField
          type="text"
          id="nickname"
          content="닉네임"
          onChange={handleInputData}
        />

        {/* 이메일 */}
        <InputField
          type="text"
          id="email"
          content="이메일"
          onChange={handleInputData}
        />

        {/* 이메일 인증 */}
        <EmailVerification
          userEmail={userInputData.email}
          onChange={handleInputData}
          onEmailVerified={handleEmailVerified}
        />

        {/* 비밀번호 */}
        <InputField
          type="password"
          id="password"
          content="비밀번호"
          onChange={handleInputData}
        />

        {/* 비밀번호 재입력 */}
        <InputField
          type="password"
          id="rePassword"
          content="비밀번호 재입력"
          onChange={handleInputData}
        />

        {/* 회원가입 버튼 */}
        <S.SignUpButton type="submit" disabled={!isEmailVerified}>
          회원가입
        </S.SignUpButton>
      </S.SignUpForm>

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
      </S.MoveLink>
    </>
  );
};
