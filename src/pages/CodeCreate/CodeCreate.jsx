import { AnnotationCreatePost } from "./AnnotationCreatePost";
import { ToastEditor } from "./component/ToastEditor";
import { useState } from "react";

export const CodeCreate = () => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  return (
    <div>
      <AnnotationCreatePost editorData={editorData} />
      <ToastEditor onEditorChange={handleEditorChange} />
    </div>
  );
};
