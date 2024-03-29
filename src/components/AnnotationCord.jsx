/* global AceEditor */

import { useState, useEffect } from "react";
import useOpenai from "../hook/useOpenAi";
import * as S from "./AnnotationCord.style";

import AceEditor from "react-ace";
import ace from "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";

export const AnnotationCord = () => {
  const [code, setCode] = useState("");
  const { commentedCode, error, annotateCode } = useOpenai();

  // useEffect(() => {
  //   handleAnnotationResult(commentedCode);
  // }, [commentedCode]);

  useEffect(() => {
    if (commentedCode || error) {
      const editor = ace.edit("setCord");
      editor.setValue(commentedCode || error, -1);
    }
  }, [commentedCode, error]);

  const handleCordAnnotation = async (event) => {
    const editor = ace.edit("setCord");
    editor.setValue("");
    event.preventDefault();
    await annotateCode(code);
  };

  function onChange(newValue) {
    setCode(newValue);
  }

  return (
    <S.Container>
      {/* 
      DOCS . https://github.com/securingsincity/react-ace
      ref  . https://github.com/ajaxorg/ace-builds/tree/master/src-noconflict
      ref  . https://stackoverflow.com/questions/8963855/how-do-i-get-value-from-ace-editor
      */}
      <AceEditor
        mode="javascript"
        theme="twilight"
        onChange={onChange}
        name="getCord"
        editorProps={{ $blockScrolling: true }}
        setOptions={{ useWorker: false }} // SOLVED : useWorker js 파일에서 계속 오류발생 >> 사용하지 않음으로 변경
        wrapEnabled={true}
      />
      <AceEditor
        mode="javascript"
        theme="twilight"
        name="setCord"
        editorProps={{ $blockScrolling: true }}
        setOptions={{ useWorker: false }} // SOLVED : useWorker js 파일에서 계속 오류발생 >> 사용하지 않음으로 변경
        value={error || commentedCode || ""}
        readOnly={true}
        wrapEnabled={true}
      />
      <button onClick={handleCordAnnotation}>변환하기</button>
      {error && <p>{error}</p>}
    </S.Container>
  );
};
