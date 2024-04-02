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
      if (error.response && error.response.status === 409) {
        alert(error.response.data.message);
      } else {
        alert("회원가입 실패");
      }
      console.error("회원가입 실패:", error);
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
      </S.RightBox>
    </S.Container>
  );
};
