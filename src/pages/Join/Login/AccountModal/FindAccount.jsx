import React from "react";
import { RenderForm } from "./RenderForm";

export const FindAccount = ({ active }) => {
  let componentToRender;

  switch (active) {
    case "findId":
      componentToRender = (
        <RenderForm
          label1="이메일"
          label2="비밀번호"
          type1="email"
          type2="password"
          buttonText="아이디 찾기"
        />
      );
      break;
    case "findPassword":
      componentToRender = (
        <RenderForm
          label1="아이디"
          label2="이메일"
          type1="text"
          type2="email"
          buttonText="비밀번호 찾기"
        />
      );
      break;
    default:
      componentToRender = (
        <RenderForm
          label1="이메일"
          label2="비밀번호"
          type1="email"
          type2="password"
          buttonText="아이디 찾기"
        />
      );
  }

  return <>{componentToRender}</>;
};
