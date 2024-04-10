import { Link } from 'react-router-dom';
import axios from 'axios';
import * as S from './SignUp.style';

// hook
import { useForm } from '../../../hooks/useForm';

// components
import { Input } from "./../../../components/form/Input";

export const SignUp = () => {
  const [id, onChangeId] = useForm();
  const [nickname, onChangeNickname] = useForm();
  const [email, onChangeEmail] = useForm();
  const [password, onChangePassword] = useForm();
  const [rePassword, onChangeRePassword] = useForm();

  const postFormData = {
    id,
    nickname,
    email,
    password,
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();

    // 서버로 데이터 전송
    try {
      const response = await axios.post("/userdata/signup", postFormData);
    } catch (err) {
      console.log(`에러발생: ${err}`);
    }
  };

  return (
    <>
      <p>회원가입</p>
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <S.SignUpFiled>
          <label htmlFor="id">아이디</label>
          <Input type="text" id="id" value={id} onChange={onChangeId} />
        </S.SignUpFiled>

        {/* 닉네임 */}
        <S.SignUpFiled>
          <label htmlFor="nickname">닉네임</label>
          <Input
            type="text"
            id="nickname"
            value={nickname}
            onChange={onChangeNickname}
          />
        </S.SignUpFiled>

        {/* 이메일 */}
        <S.SignUpFiled>
          <label htmlFor="email">이메일</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
        </S.SignUpFiled>

        {/* 비밀번호 */}
        <S.SignUpFiled>
          <label htmlFor="password">비밀번호</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </S.SignUpFiled>

        {/* 비밀번호 재입력 */}
        <S.SignUpFiled>
          <label htmlFor="re-password">비밀번호</label>
          <Input
            type="password"
            id="rePassword"
            value={rePassword}
            onChange={onChangeRePassword}
          />
        </S.SignUpFiled>

        {/* 회원가입 버튼 */}
        <S.SignUpButton type="submit">회원가입</S.SignUpButton>
      </form>

      {/* 페이지 이동 */}
      <S.MoveLink>
        <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
      </S.MoveLink>
    </>
  );
};
