import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./Login.style";

// context
import { useUserLogin } from "../../../context/UserLoginContext";

// hook
import { useInput } from "../../../hooks/form/useInput";

// component
import { SocialButton } from "./socialLogin/SocialButton";
import { AccountModal } from "./AccountModal/AccountModal";
import { Metas } from "./../../../components/common/Metas";

// button array
import { SOCIAL_LOGIN } from "./socialLogin/SocialLoginType";

import { encryptData } from "../../../utils/secure";

export const Login = () => {
  const [id, onChangeId] = useInput();
  const [password, onChangePassword] = useInput();
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
        await encryptData(response.data.user, "user", sessionStorage);
        setIsLogin(true);
        setIsChange(true);
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("로그인 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      <Metas title="로그인" url="/login" description="스타블로그에 로그인" />
      <S.LoginBox>
        {/* 로그인 문구 */}
        <S.LoginText>똑소리 나는 코드 기록</S.LoginText>
        {/* 소셜 로그인  */}
        <S.SocialButtonBox>
          {SOCIAL_LOGIN.map((item, index) => (
            <SocialButton
              key={index}
              social={item.social}
              background={item.background}
              color={item.color}
            />
          ))}
        </S.SocialButtonBox>
      </S.LoginBox>
      <hr />

      {/* 로그인 양식 */}
      <form>
        {/* 아이디 */}
        <S.LoginField>
          <label htmlFor="id">아이디</label>
          <S.Input type="text" id="id" value={id} onChange={onChangeId} />
        </S.LoginField>

        <S.LoginField>
          <label htmlFor="password">비밀번호</label>
          <S.Input
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
