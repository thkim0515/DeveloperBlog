import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Login.style';

// hook
import { useForm } from './../../../hooks/useForm';

// form component
import { SocialButton } from './SocialButton';
import { FormField } from '../../../components/form/FormField';
import { ResetAccountModal } from './ResetAccountModal';

export const Login = () => {
  const [id, onChangeId] = useForm();
  const [password, onChangePassword] = useForm();

  const [isClicked, setIsClicked] = useState(false);

  const onClickResetAccount = () => {
    setIsClicked(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // 아이디와 비밀번호가 비어있는지 확인
    if (!id.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (!password.trim()) {
      alert('비밀번호를 입력해주세요.');
      return;
    }

    // find(), indexOf()
    // const user = users.find(
    //   (user) => user.email === email && user.password === password
    // );
    // if (user === undefined) throw new Error();
    // return user;

    // await axios
    //   .post('http://localhost:8000/userdata/login', sendLoginData)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(`에러발생: ${err}`));
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
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <FormField
          labelText="아이디"
          inputType="text"
          id="id"
          value={id}
          onChange={onChangeId}
        />

        {/* 비밀번호 */}
        <FormField
          labelText="비밀번호"
          inputType="password"
          id="password"
          value={password}
          onChange={onChangePassword}
        />

        {/* 로그인 버튼 */}
        <S.LoginButton type="submit">로그인</S.LoginButton>
      </form>

      {/* 아이디/비밀번호 찾기 */}
      <S.ResetAccount onClick={onClickResetAccount}>
        아이디/비밀번호 찾기
      </S.ResetAccount>
      {isClicked && <ResetAccountModal />}

      {/* 페이지 이동 */}
      <Link to={'/signup'}>회원이 아니신가요? 회원가입 하기</Link>
    </>
  );
};
