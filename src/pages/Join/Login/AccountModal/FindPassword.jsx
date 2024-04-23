import * as S from "./AccountModal.style";
import { useState, useEffect } from "react";
import axios from "axios";

// component
import { Input } from "../../../../components/form/Input";
import { AlertPopup } from "./AlertPopup";

export const FindPassword = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // alertPopup Unmount
  useEffect(() => {
    setId("");
    setEmail("");

    let timeoutId;
    if (isSubmit) {
      timeoutId = setTimeout(() => {
        setIsSubmit(false);
      }, 3 * 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isSubmit]);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitData = async (e) => {
    e.preventDefault();

    if (!id || !email) {
      setIsSubmit(true);
      setAlertMessage("아이디 또는 이메일을 입력해주세요");
      return false;
    }

    try {
      const response = await axios.post("/users/findPwd", {
        firstField: id,
        secondField: email,
      });
    } catch (error) {
      console.error(
        "에러 발생:",
        error.response ? error.response.data.message : error.message
      );
    }
    setIsSubmit(true);
    setAlertMessage("임시 비밀번호가 발급되었습니다.\n 메일함을 확인해주세요!");

    setTimeout(() => {
      setIsSubmit(false);
    }, 2500);
  };

  return (
    <S.FindBox>
      {isSubmit ? <AlertPopup alertMessage={alertMessage} /> : <></>}
      <div>
        {/* 아이디 찾기 */}
        <S.FormField>
          <label htmlFor="field1">아이디</label>
          <Input type="text" id="field1" value={id} onChange={handleId} />
        </S.FormField>
        <S.FormField>
          <label htmlFor="field2">이메일</label>
          <Input
            type="email"
            id="field2"
            value={email}
            onChange={handleEmail}
          />
        </S.FormField>

        {/* 찾기 버튼 */}
        <S.Button onClick={onSubmitData}>비밀번호 찾기</S.Button>
      </div>
    </S.FindBox>
  );
};
