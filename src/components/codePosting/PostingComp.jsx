import React, { useState, useEffect } from "react";
import * as S from "./PostingComp.style";
import { CodePost } from "./CodePost";
import { Input } from "../LiveChat/LiveChat.style";
import { Spinner } from "./spinner/Spinner";
import { Category } from "./Category/Category";
import { handlePostCode, handleUpdateCode } from "../../utils/handleCode";
import useOpenai from "../../hooks/useOpenAi";
import { useNavigate } from "react-router-dom";
import ace from "ace-builds/src-noconflict/ace";

export const PostingComp = ({ edit, postData }) => {
  const navigate = useNavigate();
  const { commentedCode, error, annotateCode } = useOpenai();
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [toastBox, setToastBox] = useState(edit ? true : false);
  const [textData, setTextData] = useState("");

  useEffect(() => {
    if (edit && postData) {
      setTitle(postData.title);
      setCategory(postData.language);
    }
  }, [edit, postData]);

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

  //토스트에디터 토글
  const handleToggle = () => {
    setToastBox(!toastBox);
  };

  //토스트에디터 내용
  const handleEditorChange = (data) => {
    setTextData(data);
  };

  //등록,수정 함수
  const handlePost = async () => {
    if (edit) {
      await handleUpdateCode(
        postData,
        title,
        category,
        commentedCode,
        textData,
        navigate
      );
    } else {
      await handlePostCode(commentedCode, title, category, textData, navigate);
    }
  };

  return (
    <>
      <S.TitleBox>{edit ? "Code Edit" : "Code Posting"}</S.TitleBox>
      <S.CodePostingBox>
        {/* 제목 입력 */}
        <S.InputBox>
          <Input
            type="text"
            id="title"
            placeholder="제목을 입력하세요"
            onChange={handleTitleChange}
            value={title}
          />
        </S.InputBox>
        {/* 내용 입력 */}
        {isLoading && <Spinner isLoading={isLoading} />}
        <div>
          <Category category={category} setCategory={setCategory} />
          <S.ViewOptionsBox>
            <tbody>
              <tr>
                <td
                  name="clear-getAce"
                  style={{ display: !toastBox ? "block" : "none" }}
                >
                  <button onClick={handleCodeReset}>입력창 초기화</button>
                </td>
                <td
                  name="setToast"
                  style={{
                    display: commentedCode || edit ? "" : "none",
                  }}
                >
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
          postData={postData}
        />
        <S.ExplainAndButtonBox>
          <div>
            <p>* 코드를 입력하여 똑 소리 나는 주석을 달아보세요!</p>
            <p>1. 코드 입력창에 코드를 입력하고 해석하기 버튼을 클릭하세요.</p>
            <p>2. 코드 해석창에 내 코드에 대한 해석이 주석으로 달려요.</p>
            <p>3. 텍스트 에디터에 공부한 내용을 기록해요!</p>
          </div>
          <div className="button_box">
            <button
              onClick={handleCodeAnnotation}
              style={{ display: !toastBox ? "block" : "none" }}
            >
              해석하기
            </button>
            <button
              onClick={handlePost}
              style={{ display: commentedCode || edit ? "block" : "none" }}
            >
              작성 완료
            </button>
          </div>
        </S.ExplainAndButtonBox>
      </S.CodePostingBox>
    </>
  );
};
