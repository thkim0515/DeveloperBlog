/* global AceEditor */

import useOpenai from "../../hooks/useOpenAi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCaptureDiv } from "../../hooks/useCaptureDiv";
import { AceEditorComp } from "./AceEditorComp";
import { AnnotationWaitSpinner } from "./AnnotationWaitSpinner";
import { useState, useEffect } from "react";
import * as S from "./AnnotationCodeComp.style";
import ace from "ace-builds/src-noconflict/ace";

export const AnnotationCodeComp = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const { commentedCode, error, annotateCode } = useOpenai();
  const [isLoading, setIsLoading] = useState(false);

  const { captureImage } = useCaptureDiv();
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (commentedCode || error) {
      const editor = ace.edit("setCode");
      editor.setValue(commentedCode || error, -1);
      setIsLoading(false);
    }
  }, [commentedCode, error]);

  const handleCodeAnnotation = async (event) => {
    event.preventDefault();
    const editor = ace.edit("setCode");
    editor.setValue("");
    setIsLoading(true);
    await annotateCode(code);
    setIsLoading(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const postCodeToServer = async (codeData) => {
    try {
      const response = await axios.post("/userdata/annotate", codeData);
      console.log("서버 응답:", response.data);
      alert("글 등록 성공!");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("에러:", error);
      alert("글 등록 실패. 서버 에러.");
    }
  };

  function languageType(stLineValue) {
    let firstLineContent = stLineValue.split("\n")[0].replace(/[^\w.]/g, "");
    if (firstLineContent === "jsx") {
      firstLineContent = "react";
    }
    const validNames = [
      "html",
      "css",
      "javascript",
      "typescript",
      "java",
      "react",
    ];

    const matchedName = validNames.find((lang) => lang === firstLineContent);
    return matchedName;
  }

  const handlePostCode = async () => {
    //await handleCaptureImage(); // 이미지 업로드를 기다립니다.
    const user = JSON.parse(sessionStorage.getItem("user"));
    const nickname = user.nickname;
    const profileImg = user.profile;
    const result = languageType(commentedCode);

    const codeData = {
      title: title ? title : "제목없음",
      nickname: nickname,
      language: result ? result : "unknown",
      publicPrivate: true,
      imagePath: imageSrc ? imageSrc : "img/Image0.jpg",
      profileImg: profileImg,
      ace_contents: commentedCode,
      toast_contents: props.editorData,
    };

    await postCodeToServer(codeData);
  };

  function onChange(newValue) {
    setCode(newValue);
  }

  // const handleCaptureImage = async () => {
  //   const image = await captureImage("setCode");
  //   const formData = new FormData();
  //   formData.append("imagePath", image);

  //   try {
  //     const response = await axios.post("/userdata/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     setImageSrc(response.data.filePath);
  //     console.log(response.data.filePath);
  //     console.log("이미지 업로드 성공:", response.data);
  //   } catch (error) {
  //     console.error("이미지 업로드 실패:", error);
  //   }
  // };

  return (
    <>
      <S.Container>
        <S.SExplain>
          <p> ★ 자동으로 주석을 달아보세요.</p>
        </S.SExplain>
        <S.FormField>
          <div className="input-group">
            <input
              type="text"
              id="title"
              placeholder="제목을 입력해주세요."
              onChange={handleTitleChange}
            />
          </div>
          <div className="button-group">
            {isLoading && <AnnotationWaitSpinner isLoading={isLoading} />}
            <S.Button onClick={handleCodeAnnotation}>변환</S.Button>
            {/* <button onClick={handleCaptureImage}>이미지로 보기</button> */}
            <S.Button onClick={handlePostCode}>등록하기</S.Button>
            {imageSrc && <img src={imageSrc} alt="캡쳐된 코드" />}
          </div>
        </S.FormField>
        <S.AceEditorContainer>
          <AceEditorComp name="getCode" onChange={onChange} />
          <AceEditorComp
            name="setCode"
            value={error || commentedCode || ""}
            readOnly={true}
          />
        </S.AceEditorContainer>
      </S.Container>
    </>
  );
};
