import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AceEditorComp } from "./component/AceEditor";
import { useState, useEffect } from "react";
import * as S from "./AnnotationCreatePost.style";
import { decryptData } from "../../js/secure";

export const PostUpdatData = ({ setPostDataToToast, _id, editorData }) => {
  const [postData, setPostData] = useState({
    title: "",
    ace_contents: "",
    toast_contesnts: "",
    nickname: "",
    profileImg: "",
    imagePath: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (_id) {
        try {
          const response = await axios.get(`/contents/read/${_id}`);
          const data = response.data;
          setPostData({
            pid: data.pid,
            title: data.title,
            ace_contents: data.ace_contents,
            toast_contesnts: data.toast_contents,
            nickname: data.nickname,
            profileImg: data.profileImg,
            imagePath: data.imagePath,
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
    const user = decryptData("user", sessionStorage);
    const nickname = user.nickname;
    const profileImg = user.profile;

    const codeData = {
      ...postData,
      title: postData.title ? postData.title : "제목없음",
      nickname: nickname,
      //imagePath: imageSrc ? imageSrc : "img/Image0.jpg",
      profileImg: profileImg,
      publicPrivate: true,
      ace_contents: postData.code,
      toast_contents: editorData,
    };

    await updateContents(_id, codeData);
  };

  const updateContents = async (_id, codeData) => {
    try {
      const response = await axios.put(`/contents/update/${_id}`, codeData);
      console.log("서버 응답:", response.data);
      alert("성공적으로 수정");
      navigate(`/post/${postData.pid}`);
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
          <AceEditorComp name="getCode" readOnly={true} />
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
