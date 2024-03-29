/* global AceEditor */

import { useState, useEffect } from "react";
import useOpenai from "../../hook/useOpenAi";
import * as S from "./AnnotationCode.style";

import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";

import "bootstrap/dist/css/bootstrap.min.css";

export const AnnotationCode = () => {
  const [code, setCode] = useState("");
  const { commentedCode, error, annotateCode } = useOpenai();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (commentedCode || error) {
      const editor = ace.edit("setCord");
      editor.setValue(commentedCode || error, -1);
      setIsLoading(false);
    }
  }, [commentedCode, error]);

  const handleCordAnnotation = async (event) => {
    const editor = ace.edit("setCord");
    editor.setValue("");
    event.preventDefault();
    setIsLoading(true);
    await annotateCode(code);
  };

  function onChange(newValue) {
    setCode(newValue);
  }

  return (
    <>
      <S.Container>
        {/* 
      DOCS . https://github.com/securingsincity/react-ace
      ref  . https://github.com/ajaxorg/ace-builds/tree/master/src-noconflict
      ref  . https://stackoverflow.com/questions/8963855/how-do-i-get-value-from-ace-editor
      */}
        <S.STitle>
          <p> ★ 자동으로 주석을 달아보세요.</p>
        </S.STitle>
        <S.AceEditorContainer>
          <AceEditor
            mode="javascript"
            theme="one_dark"
            onChange={onChange}
            name="getCord"
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false }} // SOLVED : useWorker js 파일에서 계속 오류발생 >> 사용하지 않음으로 변경
            wrapEnabled={true}
            width="49%"
            fontSize="1rem"
          />

          <AceEditor
            mode="javascript"
            theme="one_dark"
            name="setCord"
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false }}
            value={error || commentedCode || ""}
            readOnly={true}
            wrapEnabled={true}
            width="49%"
            fontSize="1rem"
          />
        </S.AceEditorContainer>
      </S.Container>
      <button onClick={handleCordAnnotation}>변환하기</button>
    </>
  );
};
