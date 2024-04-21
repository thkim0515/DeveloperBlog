import { useState, useEffect, useRef } from "react";
import axios from "axios";
import * as S from "./AccountModal.style";

// component
import { Input } from "../../../../components/form/Input";
import { AlertPopup } from "./AlertPopup";

export const FindPassword = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const firstValue = useRef(null);
  const secondValue = useRef(null);

  // alertPopup Unmount
  useEffect(() => {
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

    try {
      const response = await axios.post("/users/findPwd", {
        firstField: id,
        secondField: email,
      });

      // TODO 배포 전 콘솔 지우기
      // console.log("결과:", response.data);
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
      <form>
        {/* 아이디 찾기 */}
        <S.FormField>
          <label htmlFor="field1">아이디</label>
          <Input
            type="text"
            id="field1"
            ref={firstValue}
            value={id}
            onChange={handleId}
          />
        </S.FormField>
        <S.FormField>
          <label htmlFor="field2">이메일</label>
          <Input
            type="email"
            id="field2"
            ref={secondValue}
            value={email}
            onChange={handleEmail}
          />
        </S.FormField>

        {/* 찾기 버튼 */}
        <S.Button onClick={onSubmitData}>비밀번호 찾기</S.Button>
      </form>
    </S.FindBox>
  );
};
