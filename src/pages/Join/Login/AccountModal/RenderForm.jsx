import * as S from "./AccountModal.style";

// component
import { Input } from "../../../../components/form/Input";
import { useState } from "react";

import axios from "axios";
export const RenderForm = ({ active, onChange, onClick, userId }) => {
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

    const endpoint = active === "findId" ? "/users/findId" : "/users/findPwd";

    try {
      const response = await axios.post(endpoint, {
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
        <label htmlFor="field1">
          {active === "findId" ? "이메일" : "아이디"}
        </label>
        <Input
          type={active === "findId" ? "email" : "text"}
          id="field1"
          value={firstField}
          onChange={handleFirstFieldChange}
        />
      </S.FormField>
      <S.FormField>
        <label htmlFor="field2">
          {active === "findId" ? "비밀번호" : "이메일"}
        </label>
        <Input
          type={active === "findId" ? "password" : "email"}
          id="field2"
          value={secondField}
          onChange={handleSecondFieldChange}
        />
      </S.FormField>

      {/* 찾기 버튼 */}
      <S.Button onClick={handleFindIdOrPassword}>
        {active === "findId" ? "아이디 찾기" : "비밀번호 찾기"}
      </S.Button>

      {/* userId 상태가 있을 때 아이디 보여주기 */}
      {userId && (
        <p>
          아이디는 <span>{userId}</span>입니다.
        </p>
      )}
    </form>
  );
};
