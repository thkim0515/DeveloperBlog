import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AceEditorComp } from "./component/AceEditor";
import { useState, useEffect } from "react";
import * as S from "./AnnotationCreatePost.style";

export const PostUpdatData = ({ setPostDataToToast, _id, editorData }) => {
  const [postData, setPostData] = useState({
    _id: "",
    title: "",
    ace_contents: "",
    toast_contents: "",
    language: "",
    imagePath: "",
    postdate: "",
    publicPrivate: false,
    views: 0,
    likes: 0,
    likeUser: [],
    userId: {
      nickname: "",
      profileImg: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (_id) {
        try {
          const response = await axios.get(`/contents/read/${_id}`);
          const data = response.data;
          setPostData({
            ...data,
          });
          setPostDataToToast(data.toast_contents);
        } catch (error) {
          console.error("에러:", error);
        }
      }
    };

    fetchData();
  }, [_id, setPostDataToToast]);

  const navigate = useNavigate();
  // const [aceEditor, setAceEditor] = useState("");
  // const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setPostData((prevData) => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const onChange = (secondAceEditorString) => {
    setPostData((prevData) => ({
      ...prevData,
      code: secondAceEditorString,
    }));
  };
  // ----------------------------------------------
  const handlePostCode = async (_id) => {
    const content = {
      ...postData,
      title: postData.title ? postData.title : "제목없음",
      ace_contents: postData.code,
      toast_contents: editorData,
    };

    await updateContents(_id, content);
  };

  const updateContents = async (_id, content) => {
    try {
      const response = await axios.put(`/contents/update/${_id}`, content);
      console.log("서버 응답:", response.data);
      alert("성공적으로 수정");
      navigate(`/post/${_id}`, { state: { content } });
      window.location.reload();
    } catch (error) {
      console.error("에러:", error);
      alert("수정 실패");
    }
  };
  // ----------------------------------------------
  return (
    <>
      <S.Container>
        <S.SExplain>
          <p> ★ 수정하기</p>
        </S.SExplain>
        <S.FormField>
          <div className="input-group">
            <input
              type="text"
              id="title"
              placeholder="제목을 입력해주세요."
              value={postData.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="button-group">
            {/* <button onClick={handleCaptureImage}>이미지로 보기</button> */}
            {/* <S.Button onClick={handlePostCode}>등록하기</S.Button> */}
            {_id && (
              <S.Button onClick={() => handlePostCode(_id)}>수정하기</S.Button>
            )}
          </div>
        </S.FormField>
        <S.AceEditorContainer>
          <AceEditorComp name="getCode" readOnly={false} />
          <AceEditorComp
            name="setCode"
            value={postData.ace_contents}
            onChange={onChange}
          />
        </S.AceEditorContainer>
      </S.Container>
    </>
  );
};
