import { AnnotationCreatePost } from "./AnnotationCreatePost";
import { ToastEditor } from "./component/ToastEditor";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const CodeCreate = () => {
  const [editorData, setEditorData] = useState("");

  const location = useLocation();
  const pid = location.state?.pid;

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  return (
    <div>
      <AnnotationCreatePost editorData={editorData} isPid={pid} />
      <ToastEditor onEditorChange={handleEditorChange} />
    </div>
  );
};
