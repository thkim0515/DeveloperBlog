<<<<<<< HEAD
=======
<<<<<<< HEAD
import * as S from './SignUp.style';
import { Link } from 'react-router-dom';

export const SignUp = () => {
  return (
    <S.Container>
      <S.LeftBox>
        <span> web class 2024</span>
=======
>>>>>>> c0587e1884edf5ef7424143189684493a3ff6fcb
import React, { useState } from "react";
import axios from "axios";
import * as S from "./SignUp.style";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [userInput, setUserInput] = useState({
    id: "",
    nickname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.password !== userInput.rePassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await axios.post("/userdata/signup", {
        id: userInput.id,
        nickname: userInput.nickname,
        email: userInput.email,
        password: userInput.password,
      });
      alert("회원가입이 완료되었습니다.");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입 실패");
    }
  };

  return (
    <S.Container>
      <S.LeftBox>
        <span>web class 2024</span>
<<<<<<< HEAD
=======
>>>>>>> serverDB
>>>>>>> c0587e1884edf5ef7424143189684493a3ff6fcb
        <br />
        <span>STARBLOG</span>
        <br />
        <span>KOSTA 281</span>
      </S.LeftBox>
      <S.RightBox>
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> c0587e1884edf5ef7424143189684493a3ff6fcb
        <Link to={"/"}>
          <span className="logo">STARBLOG</span>
        </Link>
        <p>회원가입</p>
        <form onSubmit={handleSubmit}>
          <S.FormField>
            <label htmlFor="id">아이디</label>
            <input type="text" id="id" onChange={handleChange} />
          </S.FormField>
          <S.FormField>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" onChange={handleChange} />
          </S.FormField>
          <S.FormField>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" onChange={handleChange} />
          </S.FormField>
          <S.FormField>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" onChange={handleChange} />
          </S.FormField>
          <S.FormField>
            <label htmlFor="rePassword">비밀번호 재입력</label>
            <input type="password" id="rePassword" onChange={handleChange} />
          </S.FormField>
          <S.LoginButton type="submit" value="회원가입" />
        </form>
        <Link to={"/login"}>이미 회원이신가요? 로그인 하기</Link>
<<<<<<< HEAD
=======
>>>>>>> serverDB
>>>>>>> c0587e1884edf5ef7424143189684493a3ff6fcb
      </S.RightBox>
    </S.Container>
  );
};
