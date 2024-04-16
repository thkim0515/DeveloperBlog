import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./Login.style";

// context
import { useUserLogin } from "../../../context/UserLoginContext";

// hook
import { useForm } from "../../../hooks/useForm";

// component
import { SocialButton } from "./socialLogin/SocialButton";
import { Input } from "./../../../components/form/Input";
import { AccountModal } from "./AccountModal/AccountModal";
import { Metas } from "./../../../components/common/Metas";

// button array
import { socialLogin } from "./socialLogin/SocialLoginData";

import { encryptData } from "../../../js/secure";

export const Login = () => {
  const [id, onChangeId] = useForm();
  const [password, onChangePassword] = useForm();
  const { setIsLogin, setIsChange } = useUserLogin();
  const [isShowModal, setIsShowModal] = useState(false);

  const userInputData = {
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
      const response = await axios.post("/users/login", userInputData);

      if (response.data.user) {
        encryptData(response.data.user, "user", sessionStorage);
        //sessionStorage.setItem("user", JSON.stringify(response.data.user));
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
      <Metas title="로그인" url="/login" description="스타블로그에 로그인" />
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
      {isShowModal && <AccountModal onClick={closeResetModal} />}

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/signup"}>회원이 아니신가요? 회원가입 하기</Link>
      </S.MoveLink>
    </>
  );
};
