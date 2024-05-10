import useOpenai from "../../hooks/useOpenAi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AceEditorComp } from "./component/AceEditor";
import { Spinner } from "./component/Spinner";
import { useState, useEffect } from "react";
import * as S from "./AnnotationCreatePost.style";
import ace from "ace-builds/src-noconflict/ace";
import { decryptData } from "../../utils/secure";

export const AnnotationCreatePost = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const { commentedCode, error, annotateCode } = useOpenai();
  const [isLoading, setIsLoading] = useState(false);

  const imageSrc = "";
  // const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (commentedCode || error) {
      const editor = ace.edit("setCode");
      editor.setValue(commentedCode || error, -1);
      setIsLoading(false);
    }
  }, [commentedCode, error]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCodeReset = () => {
    const editor = ace.edit("getCode");
    editor.setValue("");
  };

  const handleCodeAnnotation = async (event) => {
    event.preventDefault();
    const editor = ace.edit("setCode");
    editor.setValue("");
    setIsLoading(true);
    await annotateCode(code);
    setIsLoading(false);
  };

  async function languageType(commentedCode) {
    let firstLineContent = commentedCode.split("\n")[0].replace(/[^\w.]/g, "");
    if (firstLineContent === "jsx") {
      firstLineContent = "react";
    }
    if (firstLineContent === "js") {
      firstLineContent = "javascript";
    }
    const validNames = await decryptData("svgImages", localStorage);
    let svgImages = [];
    svgImages = validNames;

    const matchedName = svgImages.find((lang) => lang === firstLineContent);
    return matchedName;
  }

  const handlePostCode = async () => {
    if (!commentedCode) {
      alert("코드변환을 진행해 주세요.");
      return;
    }
    const user = await decryptData("user", sessionStorage);
    const nickname = user.nickname;
    const profileImg = user.profileimg;
    const result = await languageType(commentedCode);
    const userId = user.id;

    const codeData = {
      userId: userId,
      title: title ? title : "제목없음",
      nickname: nickname,
      profileImg: profileImg,
      language: result ? result : "unknown",
      publicPrivate: true,
      imagePath: imageSrc ? imageSrc : "img/Image0.jpg",
      ace_contents: commentedCode,
      toast_contents: props.editorData,
    };

    await postCodeToServer(codeData);
  };

  const postCodeToServer = async (codeData) => {
    try {
      const response = await axios.post("/contents/create", codeData);

      alert("글 등록 성공!");
      const userSession = await decryptData("user", sessionStorage);
      const content = response.data.info;
      content.userId = userSession;
      navigate(`/post/${content._id}`, { state: { content } });
    } catch (error) {
      console.error("에러:", error);
      alert("글 등록 실패. 서버 에러.");
    }
  };

  function onChange(newValue) {
    setCode(newValue);
  }

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
            {isLoading && <Spinner isLoading={isLoading} />}
            <S.Button onClick={handleCodeReset}>에디터 초기화</S.Button>
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

// 더미 데이터 생성
// const handlePostCode = async () => {
//   const user = decryptData("user", sessionStorage);
//   const nickname = user.nickname;
//   const profileImg = user.profile;
//   const userId = user.id;

//   for (let i = 1; i <= 200; i++) {
//     const codeData = {
//       userId: userId,
//       title: `제목없음${i}`,
//       nickname: nickname,
//       profileImg: profileImg,
//       language: "unknown",
//       publicPrivate: true,
//       imagePath: `img/Image0.jpg`,
//       ace_contents: `테스트 더미 데이터${i}`,
//       toast_contents: `테스트 더미 데이터${i}`,
//     };

//     try {
//       await axios.post("/contents/create", codeData);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   alert("끝");
// };
