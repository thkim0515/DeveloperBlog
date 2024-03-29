import * as S from './SignUp.style';
import { Link } from 'react-router-dom';

export const SignUp = () => {
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
        <p>회원가입</p>
        <form>
          <S.FormField>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" />
          </S.FormField>
          <S.FormField>
            <label htmlFor="nickname">닉네임</label>
            <input type="password" id="nickname" />
          </S.FormField>
          <S.FormField>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
          </S.FormField>
          <S.FormField>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" />
          </S.FormField>
          <S.FormField>
            <label htmlFor="re-password">비밀번호 재입력</label>
            <input type="password" id="re-password" />
          </S.FormField>
          <S.LoginButton type="button" value="회원가입" />
        </form>
        <Link to={'/login'}>이미 회원이신가요? 로그인 하기</Link>
      </S.RightBox>
    </S.Container>
  );
};
