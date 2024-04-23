import * as S from "./AccountModal.style";
import { useState, useEffect } from "react";
import axios from "axios";

// component
import { Input } from "../../../../components/form/Input";
import { AlertPopup } from "./AlertPopup";

export const FindId = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // alertPopup Unmount
  useEffect(() => {
    setEmail("");
    setPassword("");

    let timeoutId;
    if (isSubmit) {
      timeoutId = setTimeout(() => {
        setIsSubmit(false);
      }, 3 * 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isSubmit]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setIsSubmit(true);
      setAlertMessage("이메일 또는 비밀번호를 입력해주세요");
    }

    try {
      const response = await axios.post("/users/findId", {
        firstField: email,
        secondField: password,
      });

      setIsSubmit(true);
      setAlertMessage(`이메일로 아이디를 발송했습니다. 메일함을 확인해주세요!`);
    } catch (error) {
      console.error(
        "에러 발생:",
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <S.FindBox>
      {isSubmit && <AlertPopup alertMessage={alertMessage} />}
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
    </S.FindBox>
  );
};
