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

export const Login = () => {
  const [id, onChangeId] = useForm();
  const [password, onChangePassword] = useForm();
  const { setIsLogin, setIsChange } = useUserLogin();
  const [isShowModal, setIsShowModal] = useState(false);

  const userLoginData = {
    id: id,
    password: password,
  };

  const onClickResetModal = () => {
    setIsShowModal(true);
  };

  const onCloseResetModal = () => {
    setIsShowModal(false);
  };

  const navigate = useNavigate();
  const onClickLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/userdata/login", userLoginData);

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
        <p className="login-title">똑소리 나는 코드 기록</p>

        {/* 소셜 로그인  */}
        <S.SocialButtons>
          <SocialButton social="Github" />
          <SocialButton social="Google" />
          <SocialButton social="Naver" />
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
        <S.LoginButton type="submit" onClick={onClickLogin}>
          로그인
        </S.LoginButton>
      </form>

      {/* 아이디/비밀번호 찾기 */}
      <S.ResetAccount onClick={onClickResetModal}>
        아이디/비밀번호 찾기
      </S.ResetAccount>
      {isShowModal && <ResetAccountModal onClick={onCloseResetModal} />}

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/signup"}>회원이 아니신가요? 회원가입 하기</Link>
      </S.MoveLink>
    </>
  );
};
