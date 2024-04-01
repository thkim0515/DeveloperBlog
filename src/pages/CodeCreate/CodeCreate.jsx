import { AnnotationCodeComp } from "./AnnotationCodeComp";
import { ToastEditor } from "./ToastEditor";
import { useState } from "react";
export const CodeCreate = () => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  return (
    <div>
      <AnnotationCodeComp editorData={editorData} />
      <ToastEditor onEditorChange={handleEditorChange} />
    </div>
  );
};
