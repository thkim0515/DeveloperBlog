import * as S from "./SignUp.style";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { validateSignUp } from "../../../utils/validation";

export const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [step, setStep] = useState(1); // 단계 상태

  const progress = (step / 1) * 100;

  const [userInputData, setUserInputData] = useState({
    id: "",
    nickname: "",
    email: location.state?.email || "",
    password: "",
    rePassword: "",
  });

  const [errorMessage, setErrormessage] = useState({});

  const handleInputData = e => {
    const { id, value } = e.target;
    setUserInputData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { id, nickname, password, rePassword } = userInputData;
    const errors = validateSignUp(id, nickname, password, rePassword);
    setErrormessage(errors);

    if (Object.keys(errors).length === 0) {
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
    }
  };

  return (
    <>
      <S.SignUpTitle>회원가입</S.SignUpTitle>

      <S.ProgressBarContainer>
        <S.ProgressBar progress={progress} />
      </S.ProgressBarContainer>

      <S.SignUpForm onSubmit={handleSubmit}>
        {/* 아이디 */}
        <S.SignUpFiled>
          <label htmlFor="id">아이디</label>
          <S.Input type="text" id="id" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 닉네임 */}
        <S.SignUpFiled>
          <label htmlFor="nickname">닉네임</label>
          <S.Input type="text" id="nickname" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 비밀번호 */}
        <S.SignUpFiled>
          <label htmlFor="password">비밀번호</label>
          <S.Input type="password" id="password" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 비밀번호 재입력 */}
        <S.SignUpFiled>
          <label htmlFor="rePassword">비밀번호 재입력</label>
          <S.Input type="password" id="rePassword" onChange={handleInputData} />
        </S.SignUpFiled>

        {/* 에러메시지 */}
        <S.ErrorMessage>
          {errorMessage.id || errorMessage.nickname || errorMessage.password || errorMessage.rePassword}
        </S.ErrorMessage>

        {/* 회원가입 버튼 */}
        <S.SignUpButton type="submit">회원가입</S.SignUpButton>
      </S.SignUpForm>

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
      </S.MoveLink>
    </>
  );
};
