import { useState } from "react";
import * as S from "./AccountModal.style";

// component
import { Input } from "../../../../components/form/Input";

import axios from "axios";
export const FindPassword = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users/findPwd", {
        firstField: id,
        secondField: email,
      });

      console.log("결과:", response.data);
    } catch (error) {
      console.error(
        "에러 발생:",
        error.response ? error.response.data.message : error.message
      );
    }
    alert("임시 비밀번호가 발급되었습니다. 메일함을 확인해주세요!");
  };

  return (
    <form>
      {/* 아이디 찾기 */}
      <S.FormField>
        <label htmlFor="field1">아이디</label>
        <Input type="text" id="field1" value={id} onChange={handleId} />
      </S.FormField>
      <S.FormField>
        <label htmlFor="field2">이메일</label>
        <Input type="email" id="field2" value={email} onChange={handleEmail} />
      </S.FormField>

      {/* 찾기 버튼 */}
      <S.Button onClick={onSubmitData}>비밀번호 찾기</S.Button>
    </form>
  );
};
