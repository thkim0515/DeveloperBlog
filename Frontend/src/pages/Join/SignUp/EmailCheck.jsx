import React, { useState } from "react";
import * as S from "./SignUp.style";
import { Link, useNavigate } from "react-router-dom";
import { EmailVerification } from "./EmailVerification";

export const EmailCheck = () => {
  const [step, setStep] = useState(1); // 단계 상태
  const [isEmailVerified, setIsEmailVerified] = useState(false); // 이메일 인증 여부
  const [showVerification, setShowVerification] = useState(false); // 인증 컴포넌트 표시 여부

  const [userInputData, setUserInputData] = useState({
    email: "",
  });

  const navigate = useNavigate();
  const progress = (step / 2) * 100;

  const handleInputData = e => {
    setUserInputData({
      ...userInputData,
      email: e.target.value,
    });
  };

  const handleEmailCheck = () => {
    if (!userInputData.email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    alert("입력하신 이메일을 확인 후, 인증번호 전송 버튼을 클릭해주세요.");
    setShowVerification(true); // 인증 컴포넌트를 표시
  };

  const handleEmailVerified = isVerified => {
    setIsEmailVerified(isVerified);
    if (isVerified) {
      alert("이메일 인증이 완료되었습니다!");
      navigate("/signup", { state: { email: userInputData.email } }); // 인증 완료 후 이동
    }
  };

  return (
    <>
      <S.SignUpTitle>회원가입</S.SignUpTitle>

      <S.ProgressBarContainer>
        <S.ProgressBar progress={progress} />
      </S.ProgressBarContainer>

      <S.SignUpForm>
        {/* 이메일 입력 필드 */}
        <S.SignUpFiled>
          <label htmlFor="email">이메일</label>
          <S.Input
            type="email"
            id="email"
            value={userInputData.email}
            onChange={handleInputData}
            disabled={showVerification} // 인증 단계에서 이메일 입력 비활성화
          />
        </S.SignUpFiled>

        {/* 이메일 확인 버튼 */}
        {!showVerification && (
          <S.SingupButton type="button" onClick={handleEmailCheck}>
            이메일 확인하기
          </S.SingupButton>
        )}

        {/* 이메일 인증 컴포넌트 */}
        {showVerification && (
          <EmailVerification userEmail={userInputData.email} onEmailVerified={handleEmailVerified} />
        )}
      </S.SignUpForm>

      {/* 로그인 페이지 이동 링크 */}
      <S.MoveLink>
        <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
      </S.MoveLink>
    </>
  );
};
