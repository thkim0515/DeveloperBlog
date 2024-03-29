import * as S from './Login.style';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <S.Container>
      <S.LeftBox>
        <span> web class 2024</span>
        <br />
        <span>STARBLOG</span>
        <br />
        <span>KOSTA 281</span>
      </S.LeftBox>
      <S.RightBox>
        <Link to={'/'}>
          <span className="logo">STARBLOG</span>
        </Link>
        <div className="social-login">
          <p className="login-title">똑소리 나는 코드 기록</p>
          <S.SocialButtons>
            <button>Github 계정으로 로그인</button>
            <button>Google 계정으로 로그인</button>
            <button>Naver 계정으로 로그인</button>
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
          <S.LoginButton type="button" value="로그인" />
        </form>
        <S.RevertAccount className="account-reset">
          아이디/비밀번호 찾기
        </S.RevertAccount>
        <Link to={'/signup'}>회원이 아니신가요? 회원가입 하기</Link>
      </S.RightBox>
    </S.Container>
  );
};
