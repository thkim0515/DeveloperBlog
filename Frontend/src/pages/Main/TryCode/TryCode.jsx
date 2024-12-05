import { useState,useEffect } from "react";
import { AceEditorSet } from "../../../components/codePosting/AceEditor/AceEditorSet";
import ace from "ace-builds/src-noconflict/ace";
import useOpenai from "../../../hooks/useOpenAi";
import { Spinner } from "../../../components/Spinner/Spinner";
import { BasicSpinner } from "../../../components/Spinner/BasicSpinner";
import * as S from "./TryCode.style";
import "ace-builds/src-noconflict/theme-twilight";

export const TryCode = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const { commentedCode, error, annotateCode } = useOpenai();

  
  const handleCodeAnnotation = async event => {
    event.preventDefault();

    const editor = ace.edit("getCode");
    const currentCode = editor.getValue().trim();

    if (
      currentCode ===
        `//오늘 공부한 코드를 붙여 넣어보세요!\n\nfunction example() {\n  console.log("Hello World!");\n}` ||
      !currentCode
    ) {
      alert("코드를 입력해주세요!");
      return;
    }

    // editor.setValue(""); 
    setIsLoading(true);
    await annotateCode(currentCode);
    setIsLoading(false);
    setIsCodeVisible(false);
  };


  const onChangeValue = newValue => {
    setCode(newValue);
  };

useEffect(() => {
  const editor = ace.edit("getCode");
  editor.setTheme("ace/theme/twilight");
  editor.setOption("printMargin", false);
  
  const placeholderText = `//오늘 공부한 코드를 붙여 넣어보세요!\n\nfunction example() {\n  console.log("Hello World!");\n}`;

  if (!code) {
    editor.setValue(placeholderText, -1);
  }

  editor.on("focus", () => {
    if (editor.getValue() === placeholderText) {
      editor.setValue("", -1);
    }
  });

  editor.on("blur", () => {
    if (!editor.getValue().trim()) {
      editor.setValue(placeholderText, -1);
    }
  });

  return () => {
    editor.destroy();
  };
}, [code]);
  
  return (
    <S.TryCodeBox>
      <h2>오늘 학습한 코드를 기록해보세요!</h2><br/>
      <h4>아래 편집기에 오늘 공부한 코드를 붙여넣기 후 "코드 해석하기" 버튼을 눌러보세요!</h4>
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
