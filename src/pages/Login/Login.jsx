import { SocialButton } from "./SocialButton";
import * as S from "./Login.style";
import { Link, useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import { useState } from "react";
import axios from "axios";
export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  //TODO 임시로그인 기능
  const { setIsLogin } = useUserLogin();

  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("/userdata/login", {
        id: id,
        password: password,
      });

      if (response.data.user) {
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        setIsLogin(true);
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
    <S.Container>
      <S.LeftBox>
        <span> web class 2024</span>
        <video width="200" height="200" autoPlay muted loop>
          <source src="./img/blog-logo.mp4" type="video/mp4" />
        </video>
        <span>KOSTA 281</span>
      </S.LeftBox>
      <S.RightBox>
        <Link to={"/"}>
          <span className="logo">STARBLOG</span>
        </Link>
        <div className="social-login">
          <p className="login-title">똑소리 나는 코드 기록</p>
          <S.SocialButtons>
            <SocialButton social="Github" />
            <SocialButton social="Google" />
            <SocialButton social="Naver" />
          </S.SocialButtons>
        </div>
        <S.Hr />
        <form>
          <S.FormField>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </S.FormField>
          <S.FormField>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.FormField>
          <S.LoginButton type="button" value="로그인" onClick={handleLogin} />
        </form>
        <S.RevertAccount className="account-reset">
          아이디/비밀번호 찾기
        </S.RevertAccount>
        <Link to={"/signup"}>회원이 아니신가요? 회원가입 하기</Link>
      </S.RightBox>
    </S.Container>
  );
};
