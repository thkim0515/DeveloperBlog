import * as S from "./CodePosting.style";
import { CodePost } from "./CodePost";
import { Input } from "../LiveChat.style";
import ace from "ace-builds/src-noconflict/ace";
import { useState, useEffect } from "react";
import useOpenai from "../../hooks/useOpenAi";
import axios from "axios";
import { decryptData } from "../../js/secure";
import { UpdateLocalStorage } from "../../js/UpdateLocalStorage";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./spinner/Spinner";

export const PostingComp = () => {
  const navigate = useNavigate();
  const { commentedCode, error, annotateCode } = useOpenai();
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const imageSrc = "";

  useEffect(() => {
    if (commentedCode || error) {
      const editor = ace.edit("setCode");
      editor.setValue(commentedCode || error, -1);
      setIsLoading(false);
    }
  }, [commentedCode, error]);

  //제목창 관리
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //입력창 초기화
  const handleCodeReset = () => {
    const editor = ace.edit("getCode");
    editor.setValue("");
  };
  //해석하기(코드 주석)
  const handleCodeAnnotation = async (event) => {
    event.preventDefault();
    const editor = ace.edit("setCode");
    editor.setValue("");
    setIsLoading(true);
    await annotateCode(code);
    setIsLoading(false);
  };

  //토스트에디터
  const [toastBox, setToastBox] = useState(false);
  const handleToggle = () => {
    setToastBox(!toastBox);
  };

  const [textData, setTextData] = useState("");
  const handleEditorChange = (data) => {
    setTextData(data);
  };

  //언어타입
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

    console.log(svgImages);
    const matchedName = svgImages.find((lang) => lang === firstLineContent);
    return matchedName;
  }

  //글 등록하는 함수
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
      toast_contents: textData,
    };

    await postCodeToServer(codeData);
  };

  const postCodeToServer = async (codeData) => {
    try {
      const response = await axios.post("/contents/create", codeData);
      console.log("서버 응답:", response.data);
      alert("글 등록 성공!");
      const userSession = await decryptData("user", sessionStorage);
      const content = response.data.info;
      content.userId = userSession;

      UpdateLocalStorage(content);
      navigate(`/post/${content._id}`, { state: { content } });
    } catch (error) {
      console.error("에러:", error);
      alert("글 등록 실패. 서버 에러.");
    }
  };

  return (
    <>
      <S.TitleBox>Code Posting</S.TitleBox>
      <S.CodePostingBox>
        {/* 제목 입력 */}
        <S.InputBox>
          <Input
            type="text"
            id="title"
            placeholder="제목을 입력하세요"
            onChange={handleTitleChange}
          />
        </S.InputBox>
        {/* 내용 입력 */}
        <div>
          <S.ViewOptionsBox>
            {isLoading && <Spinner isLoading={isLoading} />}
            <tbody>
              <tr>
                <td
                  name="clear-getAce"
                  style={{ display: !toastBox ? "block" : "none" }}
                >
                  <button onClick={handleCodeReset}>입력창 초기화</button>
                </td>
                <td name="setToast">
                  <button onClick={handleToggle}>
                    {!toastBox ? "텍스트에디터" : "입력창"}
                  </button>
                </td>
              </tr>
            </tbody>
          </S.ViewOptionsBox>
        </div>
        {/* 코드 입력 */}
        <CodePost
          setCode={setCode}
          commentedCode={commentedCode}
          error={error}
          textData={textData}
          handleEditorChange={handleEditorChange}
          toastBox={toastBox}
          setToastBox={setToastBox}
        />
        <S.ExplainAndButtonBox>
          <div>
            <p>* 코드를 입력하여 똑 소리 나는 주석을 달아보세요!</p>
            <p>1. 코드 입력창에 코드를 입력하고 해석하기 버튼을 클릭하세요.</p>
            <p>2. 코드 해석창에 내 코드에 코드 해석이 주석으로 달려요.</p>
            <p>3. 텍스트 에디터에 공부한 내용을 기록해요!</p>
          </div>
          <div className="button_box">
          <button onClick={handleCodeAnnotation}>해석하기</button>
          <button
            onClick={handlePostCode}
            style={{ display: commentedCode ? "block" : "none" }}
          >
            작성 완료
          </button>
          </div>

        </S.ExplainAndButtonBox>
      </S.CodePostingBox>
    </>
  );
};
