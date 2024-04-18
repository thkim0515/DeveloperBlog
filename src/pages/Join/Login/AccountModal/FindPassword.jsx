import { useState } from "react";
import * as S from "./AccountModal.style";

// component
import { Input } from "../../../../components/form/Input";

import axios from "axios";
export const FindPassword = () => {
  const [firstField, setFirstField] = useState("");
  const [secondField, setSecondField] = useState("");

  const handleFirstFieldChange = (e) => {
    setFirstField(e.target.value);
  };

  const handleSecondFieldChange = (e) => {
    setSecondField(e.target.value);
  };

  const handleFindIdOrPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users/findPassword", {
        firstField: firstField,
        secondField: secondField,
      });

      console.log("결과:", response.data);
    } catch (error) {
      console.error(
        "에러 발생:",
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <form>
      {/* 아이디 찾기 */}
      <S.FormField>
        <label htmlFor="field1">아이디</label>
        <Input
          type="text"
          id="field1"
          value={firstField}
          onChange={handleFirstFieldChange}
        />
      </S.FormField>
      <S.FormField>
        <label htmlFor="field2">이메일</label>
        <Input
          type="email"
          id="field2"
          value={secondField}
          onChange={handleSecondFieldChange}
        />
      </S.FormField>

      {/* 찾기 버튼 */}
      <S.Button onClick={handleFindIdOrPassword}>비밀번호 찾기</S.Button>
    </form>
  );
};
