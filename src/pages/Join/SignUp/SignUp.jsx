import { Link } from "react-router-dom";
import axios from "axios";
import * as S from "./SignUp.style";

// hook
import { useForm } from "../../../hooks/useForm";

// components
import { Label } from "./../../../components/form/Label";
import { Input } from "./../../../components/form/Input";

export const SignUp = () => {
  const [id, onChangeId] = useForm();
  const [nickname, onChangeNickname] = useForm();
  const [email, onChangeEmail] = useForm();
  const [password, onChangePassword] = useForm();
  const [rePassword, onChangeRePassword] = useForm();

  const sendFormData = {
    id,
    nickname,
    email,
    password,
  };

  const validateForm = () => {
    if (
      id === "" ||
      nickname === "" ||
      email === "" ||
      password === "" ||
      rePassword === ""
    ) {
      alert("모든 입력칸을 입력해주세요.");
      return false;
    }

    if (password !== rePassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("유효한 이메일을 입력해주세요.");
      return false;
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // 서버로 데이터 전송
    await axios
      .post("/userdata/signup", sendFormData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(`에러발생: ${err}`));
  };

  return (
    <>
      <Link to={"/"}>
        <span className="logo">STARBLOG</span>
      </Link>
      <p>회원가입</p>
      <form onSubmit={onSubmit}>
        {/* 아이디 */}
        <S.FormField>
          <Label htmlFor="id" text="아이디" />
          <Input type="text" id="id" value={id} onChange={onChangeId} />
        </S.FormField>

        {/* 닉네임 */}
        <S.FormField>
          <Label htmlFor="nickname" text="닉네임" />
          <Input
            type="text"
            id="nickname"
            value={nickname}
            onChange={onChangeNickname}
          />
        </S.FormField>

        {/* 이메일 */}
        <S.FormField>
          <Label htmlFor="email" text="이메일" />
          <Input
            type="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
        </S.FormField>

        {/* 비밀번호 */}
        <S.FormField>
          <Label htmlFor="password" text="비밀번호" />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </S.FormField>

        {/* 비밀번호 재입력 */}
        <S.FormField>
          <Label htmlFor="re-password" text="비밀번호 재입력" />
          <Input
            type="password"
            id="rePassword"
            value={rePassword}
            onChange={onChangeRePassword}
          />
        </S.FormField>

        {/* 회원가입 버튼 */}
        <S.SignUpButton type="submit">회원가입</S.SignUpButton>
      </form>
      <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
    </>
  );
};
