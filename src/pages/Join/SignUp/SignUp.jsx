import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import * as S from "./SignUp.style";

// components
import { Input } from "./../../../components/form/Input";
import { EmailVerification } from "./EmailVerification";
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
      <Helmet>
        <title>회원가입 - StarBlog</title>
      </Helmet>
      <S.SignUpText>회원가입</S.SignUpText>
      <form onSubmit={handleSubmit}>
        {/* 아이디 */}
        <S.SignUpFiled>
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 닉네임 */}
        <S.SignUpFiled>
          <label htmlFor="nickname">닉네임</label>
          <Input type="text" id="nickname" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 이메일 */}
        <S.SignUpFiled>
          <label htmlFor="email">이메일</label>
          <Input type="email" id="email" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 이메일 인증 */}
        <S.SignUpFiled>
          <label htmlFor="email">이메일 인증번호</label>
          <EmailVerification
            userEmail={userInputData.email}
            onChange={handleInputData}
            onEmailVerified={handleEmailVerified}
          />
        </S.SignUpFiled>

        {/* 비밀번호 */}
        <S.SignUpFiled>
          <label htmlFor="password">비밀번호</label>
          <Input type="password" id="password" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 비밀번호 재입력 */}
        <S.SignUpFiled>
          <label htmlFor="re-password">비밀번호</label>
          <Input type="password" id="rePassword" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 회원가입 버튼 */}
        <S.SignUpButton type="submit" disabled={!isEmailVerified}>
          회원가입
        </S.SignUpButton>
      </form>

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
      </S.MoveLink>
    </>
  );
};
