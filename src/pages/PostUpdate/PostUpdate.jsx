import { useParams } from "react-router-dom";
import { PostUpdatData } from "../CodeCreate/PostUpdatData";
import { ToastEditor } from "../CodeCreate/component/ToastEditor";
import { useState } from "react";
import { Metas } from "./../../components/common/Metas";
import { useLocation } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const PostUpdate = () => {
  // _id값을 받아옴 > PostUpdatData 로 전송 >> API 호출 >> return >>
  // return 값 상태 저장 >> ToastEditor 전송 >> 수정 >> 수정데이터 반환 >>
  // 반환 데이터 PostUpdatData 로 전송 >> API Update
  let { _id } = useParams();

  //작성자만 접근 가능하게
  const location = useLocation();
  const userId = location.state?.userId;

  const [editorData, setEditorData] = useState("");
  const [postData, setPostDataToToast] = useState(null);

  const handleEditorChange = (data) => {
    setEditorData(data);
  };

  return userId ? (
    <div>
      <Metas title="게시글 업로드" none />
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
  ) : (
    <NotFound />
  );
};
