import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./Login.style";

// context
import { useUserLogin } from "../../../context/UserLoginContext";

// hook
import { useForm } from "../../../hooks/useForm";

// component
import { SocialButton } from "./SocialButton";
import { Input } from "./../../../components/form/Input";
import { ResetAccountModal } from "./AccountModal/AccountModal";

const socialLogin = [
  { social: "Github", background: "black", color: "white" },
  { social: "Google", background: "white", color: "black" },
  { social: "Naver", background: "green", color: "white" },
];

export const Login = () => {
  const [id, onChangeId] = useForm();
  const [password, onChangePassword] = useForm();
  const { setIsLogin, setIsChange } = useUserLogin();
  const [isShowModal, setIsShowModal] = useState(false);

  const userLoginData = {
    id: id,
    password: password,
  };

  const showResetModal = () => {
    setIsShowModal(true);
  };

  const closeResetModal = () => {
    setIsShowModal(false);
  };

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users/login", userLoginData);

      if (response.data.user) {
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        setIsLogin(true);
        setIsChange(true);
        navigate("/");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("로그인 요청 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      <div className="social-login">
        {/* 로그인 문구 */}
        <S.LoginText>똑소리 나는 코드 기록</S.LoginText>

        {/* 소셜 로그인  */}
        <S.SocialButtons>
          {socialLogin.map((item, index) => (
            <SocialButton
              key={index}
              social={item.social}
              background={item.background}
              color={item.color}
            />
          ))}
        </S.SocialButtons>
      </div>
      <hr />

      {/* 로그인 양식 */}
      <form>
        {/* 아이디 */}
        <S.LoginField>
          <label htmlFor="id">아이디</label>
          <Input type="text" id="id" value={id} onChange={onChangeId} />
        </S.LoginField>

        <S.LoginField>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </S.LoginField>

        {/* 로그인 버튼 */}
        <S.LoginButton type="submit" onClick={handleLogin}>
          로그인
        </S.LoginButton>
      </form>

      {/* 아이디/비밀번호 찾기 */}
      <S.ResetAccount onClick={showResetModal}>
        아이디/비밀번호 찾기
      </S.ResetAccount>
      {isShowModal && <ResetAccountModal onClick={closeResetModal} />}

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/signup"}>회원이 아니신가요? 회원가입 하기</Link>
      </S.MoveLink>
    </>
  );
};
