import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";

export const AceEditorComp = ({ name, onChange, value, readOnly = false }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="one_dark"
      onChange={onChange}
      name={name}
      editorProps={{ $blockScrolling: true }}
      setOptions={{ useWorker: false }}
      wrapEnabled={true}
      width="49%"
      fontSize="1rem"
      value={value}
      readOnly={readOnly}
    />
  );
};
