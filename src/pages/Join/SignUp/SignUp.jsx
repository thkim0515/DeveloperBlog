import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as S from './SignUp.style';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    id: '',
    nickname: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState({
    id: '',
    nickname: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 입력 값에 따라 유효성 검사를 수행하고 에러 메시지를 설정합니다.
    let errorMessage = '';
    if (name === 'id') {
      errorMessage = value.length < 5 ? '아이디는 5자 이상이어야 합니다.' : '';
    }
    // 다른 필드에 대한 유효성 검사를 여기에 추가할 수 있습니다.
    setErrorMessage({ ...errorMessage, [name]: errorMessage });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/data/form-data.json', formData);
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Link to={'/'}>
        <span className="logo">STARBLOG</span>
      </Link>
      <p>회원가입</p>
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <S.FormField>
          <div>
            <label htmlFor="id">아이디</label>
            <S.ValidateMessage>{errorMessage.id}</S.ValidateMessage>{' '}
          </div>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={onChange}
          />
        </S.FormField>

        {/* 닉네임 */}
        <S.FormField>
          <div>
            <label htmlFor="nickname">닉네임</label>
            <S.ValidateMessage>{errorMessage.nickname}</S.ValidateMessage>{' '}
          </div>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={onChange}
          />
        </S.FormField>

        {/* 이메일 */}
        <S.FormField>
          <div>
            <label htmlFor="email">이메일</label>
            <S.ValidateMessage>{errorMessage.email}</S.ValidateMessage>{' '}
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </S.FormField>

        {/* 비밀번호 */}
        <S.FormField>
          <div>
            <label htmlFor="password">비밀번호</label>
            <S.ValidateMessage>{errorMessage.password}</S.ValidateMessage>{' '}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </S.FormField>

        {/* 비밀번호 재입력 */}
        <S.FormField>
          <div>
            <label htmlFor="re-password">비밀번호 재입력</label>
            <S.ValidateMessage>에러 메시지</S.ValidateMessage>
          </div>
          <input type="password" id="re-password" />
        </S.FormField>

        {/* 회원가입 버튼 */}
        <S.SignUpButton type="submit">회원가입</S.SignUpButton>
      </form>
      <Link to={'/login'}>이미 회원이신가요? 로그인 하기</Link>
    </>
  );
};
