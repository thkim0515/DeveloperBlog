import { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import * as S from './Login.style';
import { SocialButton } from './SocialButton';

export const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPassword, setInputPassword] = useState();

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await axios.get('/data/form-data.json').then((res) => {
    //   console.log(res.data);
    // });
  };

  return (
    <>
      <Link to={'/'}>
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
      <hr />

      {/* 로그인 양식 */}
      <form onSubmit={handleSubmit}>
        {/* 아이디 */}
        <S.FormField>
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" value={inputId} onChange={handleInputId} />
        </S.FormField>

        {/* 비밀번호 */}
        <S.FormField>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            value={inputPassword}
            onChange={handleInputPassword}
          />
        </S.FormField>
        <S.ValidateMessage>error message</S.ValidateMessage>

        {/* 로그인 버튼 */}
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </form>
      <S.ResetAccount>아이디/비밀번호 찾기</S.ResetAccount>
      <Link to={'/signup'}>회원이 아니신가요? 회원가입 하기</Link>
    </>
  );
};
