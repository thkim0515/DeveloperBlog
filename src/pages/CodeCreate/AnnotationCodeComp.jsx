/* global AceEditor */

import useOpenai from "../../hook/useOpenAi";
import { useCaptureDiv } from "../../hook/useCaptureDiv";
import { AceEditorComp } from "./AceEditorComp";
import { AnnotationWaitSpinner } from "./AnnotationWaitSpinner";
import { useState, useEffect } from "react";

import * as S from "./AnnotationCodeComp.style";
import ace from "ace-builds/src-noconflict/ace";

export const AnnotationCodeComp = () => {
  const [code, setCode] = useState("");
  const { commentedCode, error, annotateCode } = useOpenai();
  const [isLoading, setIsLoading] = useState(false);

  const { captureImage } = useCaptureDiv();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (commentedCode || error) {
      const editor = ace.edit("setCode");
      editor.setValue(commentedCode || error, -1);
      setIsLoading(false);
    }
  }, [commentedCode, error]);

  const handleCodeAnnotation = async (event) => {
    event.preventDefault();
    const editor = ace.edit("setCode");
    editor.setValue("");
    setIsLoading(true);
    await annotateCode(code);
    const annotatedCode = editor.getValue();
    setIsLoading(false);
  };

  function onChange(newValue) {
    setCode(newValue);
  }

  const handleCaptureImage = async () => {
    const image = await captureImage("setCode");
    setImageSrc(image);
  };

  return (
    <>
      <S.Container>
        <S.STitle>
          <p> ★ 자동으로 주석을 달아보세요.</p>
        </S.STitle>
        <S.AceEditorContainer>
          <AceEditorComp name="getCode" onChange={onChange} />
          <AceEditorComp
            name="setCode"
            value={error || commentedCode || ""}
            readOnly={true}
          />
        </S.AceEditorContainer>
      </S.Container>
      {isLoading && <AnnotationWaitSpinner isLoading={isLoading} />}
      <button onClick={handleCodeAnnotation}>변환하기</button>
      <button onClick={handleCaptureImage}>이미지로 보기</button>
      {imageSrc && <img src={imageSrc} alt="캡쳐된 코드" />}
    </>
  );
};
