import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";

export const AceEditorSet = ({ name, onChange, value, readOnly = false }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="twilight"
      onChange={onChange}
      name={name}
      editorProps={{ $blockScrolling: false }}
      setOptions={{
        useWorker: false,
        printMargin: false, // 프린트 마진 (하얀선) 제거
      }}
      wrapEnabled={true}
      width="100%"
      fontSize="1rem"
      value={value}
      readOnly={readOnly}
    />
  );
};
