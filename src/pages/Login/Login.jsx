<<<<<<< HEAD
import { SocialButton } from "./SocialButton";
import * as S from "./Login.style";
import { Link, useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";

export const Login = () => {
  //TODO 임시로그인 기능
  const { setIsLogin } = useUserLogin();

  //페이지 이동
  const navigate = useNavigate();
  //로그인,페이지 이동 함수
  const handleLogin = () => {
    setIsLogin(true);
    navigate("/");
  };
=======
import { SocialButton } from './SocialButton';
import * as S from './Login.style';
import { Link } from 'react-router-dom';

export const Login = () => {
>>>>>>> serverDB
  return (
    <S.Container>
      <S.LeftBox>
        <span> web class 2024</span>
<<<<<<< HEAD
        <video width="200" height="200" autoPlay muted loop>
          <source src="./img/blog-logo.mp4" type="video/mp4" />
        </video>
        <span>KOSTA 281</span>
      </S.LeftBox>
      <S.RightBox>
        <Link to={"/"}>
=======
        <br />
        <span>STARBLOG</span>
        <br />
        <span>KOSTA 281</span>
      </S.LeftBox>
      <S.RightBox>
        <Link to={'/'}>
>>>>>>> serverDB
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
            <input type="text" id="id" />
          </S.FormField>
          <S.FormField>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" />
          </S.FormField>
<<<<<<< HEAD
          <S.LoginButton type="button" value="로그인" onClick={handleLogin} />
=======
          <S.LoginButton type="button" value="로그인" />
>>>>>>> serverDB
        </form>
        <S.RevertAccount className="account-reset">
          아이디/비밀번호 찾기
        </S.RevertAccount>
<<<<<<< HEAD
        <Link to={"/signup"}>회원이 아니신가요? 회원가입 하기</Link>
=======
        <Link to={'/signup'}>회원이 아니신가요? 회원가입 하기</Link>
>>>>>>> serverDB
      </S.RightBox>
    </S.Container>
  );
};
