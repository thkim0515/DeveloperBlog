import { useState } from "react";
import styled from "styled-components";
import * as S from "./AccountModal.style";

// component
import { Input } from "../../../../components/form/Input";

import axios from "axios";
import { AlertPopup } from "./AlertPopup";
export const FindId = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(true);
  const [isPassed, setIsPassed] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users/findId", {
        firstField: email,
        secondField: password,
      });

      console.log("결과:", response.data);
    } catch (error) {
      console.error(
        "에러 발생:",
        error.response ? error.response.data.message : error.message
      );
    }
    alert("아이디가 이메일로 발송되었습니다. 메일함을 확인해주세요");
  };

  return (
    <FindBox>
      {isSubmit ? <AlertPopup isPassed={isPassed} /> : <></>}
      <form>
        {/* 아이디 찾기 */}
        <S.FormField>
          <label htmlFor="field1">이메일</label>
          <Input
            type="email"
            id="field1"
            value={email}
            onChange={handleEmail}
          />
        </S.FormField>
        <S.FormField>
          <label htmlFor="field2">비밀번호</label>
          <Input
            type="password"
            id="field2"
            value={password}
            onChange={handlePassword}
          />
        </S.FormField>

        {/* 찾기 버튼 */}
        <S.Button onClick={onSubmitData}>아이디 찾기</S.Button>
      </form>
    </FindBox>
  );
};

const FindBox = styled.div`
  position: relative;
`;
