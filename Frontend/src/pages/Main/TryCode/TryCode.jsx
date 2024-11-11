import { useState } from "react";
import { AceEditorSet } from "../../../components/codePosting/AceEditor/AceEditorSet";
import ace from "ace-builds/src-noconflict/ace";
import useOpenai from "../../../hooks/useOpenAi";
import { Spinner } from "../../../components/Spinner/Spinner";
import { BasicSpinner } from "../../../components/Spinner/BasicSpinner";
import * as S from "./TryCode.style";

export const TryCode = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const { commentedCode, error, annotateCode } = useOpenai();

  const handleCodeAnnotation = async event => {
    event.preventDefault();
    const editor = ace.edit("setCode");
    editor.setValue("");
    setIsLoading(true);
    await annotateCode(code);
    setIsLoading(false);
    setIsCodeVisible(false); // 해석이 완료되면 getCode를 숨기고 setCode를 보이게 설정
  };

  const onChangeValue = newValue => {
    setCode(newValue);
  };

  return (
    <S.TryCodeBox>
      <h2>오늘 학습한 코드를 기록해보세요!</h2>
      <S.CodeEditorBox>
        {isLoading && (
          <Spinner isLoading={isLoading}>
            <BasicSpinner />
          </Spinner>
        )}
        <S.CodeEditorWrapper $isVisible={isCodeVisible}>
          <AceEditorSet name="getCode" onChange={onChangeValue} />
        </S.CodeEditorWrapper>
        <S.CodeEditorWrapper $isVisible={!isCodeVisible}>
          <AceEditorSet name="setCode" value={error || commentedCode || ""} readOnly={true} />
        </S.CodeEditorWrapper>
      </S.CodeEditorBox>
      <S.CodeButton onClick={handleCodeAnnotation} disabled={isLoading}>
        {isLoading ? "해석 중..." : "코드 해석하기"}
      </S.CodeButton>
    </S.TryCodeBox>
  );
};
