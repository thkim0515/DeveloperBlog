import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";

export const AceEditorSet = ({ name, value, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme={name === "getCode" ? "one_dark" : "twilight"}
      editorProps={{ $blockScrolling: true }}
      setOptions={{ useWorker: false }}
      wrapEnabled={true}
      width="100%"
      height="100%"
      fontSize="1rem"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
