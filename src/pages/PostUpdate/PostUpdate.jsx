import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PostUpdatData } from "../CodeCreate/PostUpdatData";
import { ToastEditor } from "../CodeCreate/component/ToastEditor";
import { useState } from "react";

export const PostUpdate = () => {
  // _id값을 받아옴 > PostUpdatData 로 전송 >> API 호출 >> return >>
  // return 값 상태 저장 >> ToastEditor 전송 >> 수정 >> 수정데이터 반환 >>
  // 반환 데이터 PostUpdatData 로 전송 >> API Update
  let { _id } = useParams();

  const [editorData, setEditorData] = useState("");
  const [postData, setPostDataToToast] = useState(null);

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  return (
    <div>
      <Helmet>
        <title>PostUpdate - StarBlog</title>
      </Helmet>
      <PostUpdatData
        _id={_id}
        editorData={editorData}
        setPostDataToToast={setPostDataToToast}
      />
      {postData && (
        <ToastEditor
          editorData={postData}
          onEditorChange={handleEditorChange}
        />
      )}
    </div>
  );
};
