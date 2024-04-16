import { AnnotationCreatePost } from "./AnnotationCreatePost";
import { ToastEditor } from "./component/ToastEditor";
import { useState } from "react";
import { Metas } from "../../components/common/Metas";

export const CodeCreate = () => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  return (
    <div>
      <Metas title="게시글 작성" none />
      <AnnotationCreatePost editorData={editorData} />
      <ToastEditor onEditorChange={handleEditorChange} />
    </div>
  );
};
