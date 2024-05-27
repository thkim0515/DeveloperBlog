import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AceEditorComp } from "./component/AceEditor";
import { useState, useEffect } from "react";
import * as S from "./AnnotationCreatePost.style";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-one_dark";
import "ace-builds/src-noconflict/theme-twilight";
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

  const handleTitleChange = event => {
    setPostData(prevData => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const onChange = secondAceEditorString => {
    setPostData(prevData => ({
      ...prevData,
      code: secondAceEditorString,
    }));
  };

  const handlePostCode = async _id => {
    const content = {
      ...postData,
      title: postData.title ? postData.title : "제목없음",
      ace_contents: postData.ace_contents,
      toast_contents: editorData,
    };

    await updateContents(_id, content);
  };

  const updateContents = async (_id, content) => {
    try {
      await axios.put(`/contents/update/${_id}`, content);
      navigate(`/post/${_id}`, { state: { content } });
    } catch (error) {
      alert("수정실패에러:", error);
    }
  };

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
          <div className="button-group">{_id && <S.Button onClick={() => handlePostCode(_id)}>수정하기</S.Button>}</div>
        </S.FormField>
        <S.AceEditorContainer $isUpdate={true}>
          <AceEditor
            mode="javascript"
            theme="one_dark"
            onChange={onChange}
            name="setCode"
            editorProps={{ $blockScrolling: true }}
            setOptions={{ useWorker: false }}
            wrapEnabled={true}
            width="100%"
            fontSize="1rem"
            value={postData.ace_contents}
          />
        </S.AceEditorContainer>
      </S.Container>
    </>
  );
};
